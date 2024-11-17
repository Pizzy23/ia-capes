import { Injectable } from '@nestjs/common';
import DynamicPrisma from 'src/config/prisma/dynamicPrisma';

@Injectable()
export class UserRepository {
  private readonly modelName = 'User';

  constructor(private readonly repository: DynamicPrisma) {}

  async createUser(data: { email: string; password: string; profession: string }) {
    return this.repository.create(this.modelName, data);
  }

  async getUserById(id: number) {
    return this.repository.findById(this.modelName, id);
  }

  async getUserByEmail(email: string) {
    return this.repository.findByEmail(this.modelName, email);
  }

  async updateUser(id: number, data: { email?: string; password?: string; profession?: string }) {
    return this.repository.update(this.modelName, id, data);
  }

  async findUsers(filter: any) {
    return this.repository.findMany(this.modelName, filter);
  }

  async countUsers(filter: any) {
    return this.repository.count(this.modelName, filter);
  }
}
