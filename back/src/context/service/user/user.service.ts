import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from 'src/context/entity';


@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(data: { email: string; password: string; profession: string }) {
    return this.userRepository.createUser(data);
  }

  async getUserById(id: number) {
    const user = await this.userRepository.getUserById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
    return user;
  }

  async updateUser(id: number, data: { email?: string; password?: string; profession?: string }) {
    const user = await this.getUserById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return this.userRepository.updateUser(id, data);
  }

  async findUsers(filter: any) {
    return this.userRepository.findUsers(filter);
  }

  async countUsers(filter: any) {
    return this.userRepository.countUsers(filter);
  }
}
