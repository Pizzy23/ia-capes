import { Module } from '@nestjs/common';
import { PrismaService } from 'src/config';
import { ArticlesService, UserService } from './service';
import { ArticlesController, UserController } from './controller';
import { ArticleRepository, UserRepository } from './entity';
import { OpenAIModule } from 'src/external/external.module';
import DynamicPrisma from 'src/config/prisma/dynamicPrisma';

@Module({
  imports: [OpenAIModule],
  controllers: [UserController, ArticlesController],
  providers: [
    UserService,
    ArticlesService,
    UserRepository,
    ArticleRepository,
    PrismaService,
    DynamicPrisma,
  ],
  exports: [PrismaService, OpenAIModule],
})
export class ContextModule {}
