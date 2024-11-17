import { Injectable } from '@nestjs/common';
import DynamicPrisma from 'src/config/prisma/dynamicPrisma';

@Injectable()
export class ArticleRepository {
  constructor(private readonly dynamicPrisma: DynamicPrisma) {}

  async create(data: {
    categories?: string[];
    iaResume?: string;
    title: string;
    authors: string[];
    issn?: string;
    topics: string[];
    abstract?: string;
    references: string[];
  }) {
    return this.dynamicPrisma.create('Article', data);
  }

  async findById(id: number) {
    return this.dynamicPrisma.findById('Article', { id });
  }

  async update(
    id: number,
    data: Partial<{
      title: string;
      authors: string[];
      issn?: string;
      topics: string[];
      abstract?: string;
      references: string[];
    }>,
  ) {
    return this.dynamicPrisma.update('Article', { id }, data);
  }

  async delete(id: number) {
    return this.dynamicPrisma.update('Article', { id }, { deleted: true });
  }

  async findManyByUser(userId: number) {
    return this.dynamicPrisma.findMany('Article', { userId });
  }
}
