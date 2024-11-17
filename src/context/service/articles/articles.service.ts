import { Injectable } from '@nestjs/common';
import { ArticleRepository } from 'src/context/entity';
import { OpenAIService } from 'src/external/ia/openIa';

@Injectable()
export class ArticlesService {
  constructor(
    private readonly repository: ArticleRepository,
    private readonly ia: OpenAIService,
  ) {}

  async createArticle(data: {
    categories?: string[];
    iaResume?: string;
    title: string;
    text: string;
    authors: string[];
    issn?: string;
    topics: string[];
    abstract?: string;
    references: string[];
  }) {
    data.iaResume = await this.ia.generateText(
      data.text,
      'Me de um pequeno resumo no maximo 140 caracteres: ',
    );
    const category = await this.ia.generateText(
      data.text,
      'Crie as categorias para o texto enviado, separado pro virgula igual: "categoria1, categoria2, categoria3"',
    );
    data.categories = category.split(/\s*,\s*/);
    return this.repository.create(data);
  }

  async getArticleById(id: number) {
    return this.repository.findById(id);
  }

  async updateArticle(
    id: number,
    data: Partial<{
      title: string;
      authors: string[];
      issn?: string;
      text: string;
      topics: string[];
      abstract?: string;
      references: string[];
    }>,
  ) {
    return this.repository.update(id, data);
  }

  async deleteArticle(id: number) {
    return this.repository.delete(id);
  }

  async getArticlesByUser(userId: number) {
    return this.repository.findManyByUser(userId);
  }
}
