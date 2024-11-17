import { NgFor, NgIf } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'on-form-pesquisa',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, NgxSkeletonLoaderModule, RouterModule],
  templateUrl: './on-form-pesquisa.component.html',
  styleUrls: ['./on-form-pesquisa.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OnFormPesquisaComponent{
  placeholder: string = 'Procure o artigo científico aqui';
  valorPequisado: string = '';
  resultados: any[] = [];
  carregando: boolean = false;
  topicos: string[] = [];
  topicosSelecionados: Set<string> = new Set();

  constructor( private router : Router ) {

  }

  limparPlaceholder() {
    this.placeholder = '';
  }

  processarRequisicao() {
    this.carregando = true;
    this.resultados = [];
    this.valorPequisado = this.valorPequisado.toLowerCase();

    setTimeout(() => {
      const resultadosMock = [
        {
          "text": "Este artigo explora a utilização de redes neurais para otimização de processos industriais em fábricas automatizadas.",
          "title": "Otimização de Processos Industriais com Redes Neurais",
          "authors": ["Ana Pereira", "Carlos Lima", "Fernanda Costa"],
          "topics": ["Machine Learning", "Automation", "Industry 4.0"],
          "abstract": "O estudo propõe uma nova abordagem para otimização de processos em fábricas automatizadas, utilizando redes neurais para predição e ajuste de parâmetros em tempo real, visando aumento da eficiência e redução de custos."
        },
        {
          "text": "Este estudo investiga as propriedades mecânicas de materiais compósitos utilizados na indústria aeroespacial, com ênfase na resistência ao impacto.",
          "title": "Propriedades Mecânicas de Materiais Compósitos Aeroespaciais",
          "authors": ["Ricardo Gomes", "Juliana Mendes", "Vitor Fernandes"],
          "topics": ["Composite Materials", "Aerospace Engineering", "Impact Resistance"],
          "abstract": "O trabalho apresenta uma análise detalhada das propriedades de resistência ao impacto de materiais compósitos avançados, com foco em suas aplicações em componentes aeroespaciais críticos."
        },
        {
          "text": "Neste artigo, abordamos o uso de algoritmos de otimização para melhorar o desempenho de sistemas de transporte urbano.",
          "title": "Otimização de Sistemas de Transporte Urbano",
          "authors": ["Lucas Martins", "Simone Souza", "Carlos Almeida"],
          "topics": ["Urban Planning", "Optimization", "Transportation Systems"],
          "abstract": "A pesquisa propõe o desenvolvimento de algoritmos de otimização para o gerenciamento de tráfego e melhoria da eficiência dos sistemas de transporte público em grandes cidades."
        },
        {
          "text": "A integração de energias renováveis nas redes elétricas pode ser um desafio técnico. Este trabalho examina as soluções mais viáveis para superar essas barreiras.",
          "title": "Integração de Energias Renováveis em Redes Elétricas Inteligentes",
          "authors": ["Patrícia Rocha", "Bruno Alves", "Marcos Oliveira"],
          "topics": ["Renewable Energy", "Smart Grids", "Electrical Engineering"],
          "abstract": "O estudo discute as diferentes tecnologias e métodos para integração eficiente de fontes renováveis em redes elétricas inteligentes, visando estabilidade e redução de custos operacionais."
        },
        {
          "text": "Este trabalho investiga a eficiência de diferentes técnicas de aprendizado supervisionado para a análise de grandes volumes de dados médicos.",
          "title": "Aplicações de Aprendizado Supervisionado na Análise de Dados Médicos",
          "authors": ["Cláudia Pereira", "Ricardo Sampaio", "Daniel Costa"],
          "topics": ["Data Science", "Medical Informatics", "Machine Learning"],
          "abstract": "Este estudo explora a aplicabilidade de algoritmos de aprendizado supervisionado na classificação e análise de grandes conjuntos de dados médicos, com foco em diagnósticos automáticos."
        },
        {
          "text": "O presente estudo analisa o impacto do uso de biocombustíveis no transporte público urbano, levando em consideração fatores econômicos e ambientais.",
          "title": "Impacto dos Biocombustíveis no Transporte Público Urbano",
          "authors": ["Rafael Lima", "Tatiane Silva", "Gabriel Costa"],
          "topics": ["Renewable Energy", "Public Transport", "Sustainability"],
          "abstract": "A pesquisa aborda as vantagens e desafios do uso de biocombustíveis no transporte público, analisando tanto os benefícios ambientais quanto as implicações econômicas dessa transição."
        },
        {
          "text": "Este artigo discute os avanços recentes na utilização de sistemas de inteligência artificial para o diagnóstico precoce de doenças neurológicas.",
          "title": "Inteligência Artificial no Diagnóstico Precoce de Doenças Neurológicas",
          "authors": ["Carla Menezes", "Paulo Gomes", "Larissa Almeida"],
          "topics": ["Artificial Intelligence", "Neuroinformatics", "Healthcare"],
          "abstract": "O trabalho explora as aplicações de IA no diagnóstico precoce de doenças como Alzheimer e Parkinson, apresentando resultados promissores de sistemas de aprendizado profundo."
        },
        {
          "text": "Este estudo propõe um novo modelo de previsão de demanda de energia elétrica utilizando redes neurais convolucionais.",
          "title": "Previsão de Demanda de Energia com Redes Neurais Convolucionais",
          "authors": ["Eduardo Santos", "Renata Oliveira", "Tiago Costa"],
          "topics": ["Energy Forecasting", "Deep Learning", "Artificial Intelligence"],
          "abstract": "O artigo apresenta uma nova metodologia baseada em redes neurais convolucionais para prever com maior precisão a demanda de energia elétrica, visando melhorar a gestão de recursos."
        },
        {
          "text": "A sustentabilidade dos processos industriais depende de mudanças no consumo de recursos naturais. Este estudo propõe alternativas para redução do desperdício na indústria têxtil.",
          "title": "Redução de Desperdício na Indústria Têxtil: Uma Abordagem Sustentável",
          "authors": ["Juliana Costa", "Tiago Mendes", "Lucas Fernandes"],
          "topics": ["Sustainability", "Textile Industry", "Resource Management"],
          "abstract": "Este estudo investiga alternativas sustentáveis para reduzir o desperdício de materiais e energia na indústria têxtil, com foco na implementação de tecnologias ecoeficientes."
        },
        {
          "text": "Este artigo explora o impacto das novas tecnologias de impressão 3D no setor da construção civil, analisando seus benefícios e desafios.",
          "title": "Tecnologias de Impressão 3D na Construção Civil: Avanços e Desafios",
          "authors": ["André Costa", "Sofia Martins", "Fernando Almeida"],
          "topics": ["3D Printing", "Construction Industry", "Innovation"],
          "abstract": "O estudo aborda como a impressão 3D pode transformar a construção civil, desde a redução de custos até a possibilidade de criar estruturas mais eficientes e sustentáveis."
        }
      ];

      this.resultados = resultadosMock;
      this.atualizarTopicos();
      this.carregando = false;
    }, 2000);
  }

  restaurarPlaceholder() {
    if (this.valorPequisado === '') {
      this.placeholder = 'Procure o artigo científico aqui';
    }
  }

  atualizarTopicos() {
    const allTopics = this.resultados.flatMap((resultado) => resultado.topics);
    this.topicos = Array.from(new Set(allTopics));
  }

  toggleFiltro(topico: string) {
    if (this.topicosSelecionados.has(topico)) {
      this.topicosSelecionados.delete(topico);
    } else {
      this.topicosSelecionados.add(topico);
    }
  }

  cadastrarArtigo() {
    this.router.navigate(['/cadastrar'])
  }

  resultadosFiltrados() {
    const pesquisa = this.valorPequisado.toLowerCase();
  
    if (this.topicosSelecionados.size === 0 && !pesquisa) {
      return this.resultados;
    }
  
    return this.resultados.filter((resultado) => {
      const correspondeTopico =
        this.topicosSelecionados.size === 0 ||
        resultado.topics.some((topico: string) =>
          this.topicosSelecionados.has(topico)
        );
  
      const correspondePesquisa =
        !pesquisa ||
        resultado.authors.some((autor: string) =>
          autor.toLowerCase() === pesquisa
        ) ||
        resultado.title.toLowerCase().includes(pesquisa) ||
        resultado.topics.some((topico: string) =>
          topico.toLowerCase().includes(pesquisa)
        ) ||
        resultado.abstract.toLowerCase().includes(pesquisa);
  
      return correspondeTopico && correspondePesquisa;
    });
  }
}
