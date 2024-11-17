import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { ArticlesService } from 'src/context/service';
import { CreateArticleDto, UpdateArticleDto } from 'src/view/dto';

@ApiTags('Articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly service: ArticlesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new article' })
  @ApiBody({ type: CreateArticleDto })
  async create(@Body() body: CreateArticleDto) {
    return this.service.createArticle(body);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get article by ID' })
  @ApiParam({ name: 'id', description: 'Article ID', type: Number })
  async getById(@Param('id') id: number) {
    return this.service.getArticleById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an article by ID' })
  @ApiParam({ name: 'id', description: 'Article ID', type: Number })
  @ApiBody({ type: UpdateArticleDto })
  async update(@Param('id') id: number, @Body() body: UpdateArticleDto) {
    return this.service.updateArticle(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an article by ID' })
  @ApiParam({ name: 'id', description: 'Article ID', type: Number })
  async delete(@Param('id') id: number) {
    return this.service.deleteArticle(id);
  }

  @Get('/user/:userId')
  @ApiOperation({ summary: 'Get articles by user ID' })
  @ApiParam({ name: 'userId', description: 'User ID', type: Number })
  async getByUser(@Param('userId') userId: number) {
    return this.service.getArticlesByUser(userId);
  }
}
