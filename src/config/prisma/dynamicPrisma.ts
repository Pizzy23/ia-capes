import { PrismaClient, Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

type DynamicPrismaModels = {
  [key: string]: DynamicModel<any>;
};
@Injectable()
class DynamicPrisma {
  private readonly prisma: PrismaService;
  private readonly models: DynamicPrismaModels;

  constructor(prisma: PrismaService) {
    this.prisma = prisma;
    this.models = this.createModels(prisma);
  }

  private createModels(prisma: PrismaService): DynamicPrismaModels {
    const models: DynamicPrismaModels = {};

    models['User'] = prisma.user;
    models['Article'] = prisma.article;


    return models;
  }

  async create<T>(modelName: string, data: any): Promise<T> {
    const model = this.models[modelName];

    if (!model) {
      throw new Error(`Model '${modelName}' not found.`);
    }

    return await model.create({ data });
  }

  async findById<T>(modelName: string, data: any): Promise<T> {
    const model = this.models[modelName];

    if (!model) {
      throw new Error(`Model '${modelName}' not found.`);
    }

    return await model.findUnique({ where: data, take: 20 });
  }

  async findByEmail<T>(modelName: string, data: any): Promise<T> {
    const model = this.models[modelName];

    if (!model) {
      throw new Error(`Model '${modelName}' not found.`);
    }

    return await model.findUnique({ where: data, take: 20 });
  }
  async findMany<T>(modelName: string, data: any): Promise<T> {
    const model = this.models[modelName];

    if (!model) {
      throw new Error(`Model '${modelName}' not found.`);
    }

    return await model.findMany({
      where: data,
      take: 20,
      orderBy: {
        created_at: 'desc',
      },
    });
  }
  async findManyPages<T>(modelName: string, data: any, page: any): Promise<T> {
    const model = this.models[modelName];

    if (!model) {
      throw new Error(`Model '${modelName}' not found.`);
    }

    return await model.findMany({
      where: data,
      take: 20,
      skip: (page - 1) * 20,
      orderBy: {
        created_at: 'desc',
      },
    });
  }

  async update<T>(modelName: string, where: any, data: any): Promise<T> {
    const model = this.models[modelName];
  
    if (!model) {
      throw new Error(`Model '${modelName}' not found.`);
    }
  
    return await model.update({
      where, 
      data,  
    });
  }
  

  async count<T>(modelName: string, data: any): Promise<T> {
    const model = this.models[modelName];

    if (!model) {
      throw new Error(`Model '${modelName}' not found.`);
    }

    return await model.count({ data });
  }

  async findFirst<T>(modelName: string, data: any): Promise<T> {
    const model = this.models[modelName];

    if (!model) {
      throw new Error(`Model '${modelName}' not found.`);
    }

    return await model.findFirst({ where: data });
  }
}

export default DynamicPrisma;
