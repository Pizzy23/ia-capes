import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsArray, IsOptional } from 'class-validator';

export class CreateArticleDto {

  @ApiProperty({ description: 'Artigo enviado pelo usuario' })
  @IsString()
  text: string;

  @ApiProperty({ description: 'Título do artigo' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Autores do artigo', type: [String] })
  @IsArray()
  @IsString({ each: true })
  authors: string[];

  @ApiProperty({ description: 'ISSN do artigo', required: false })
  @IsOptional()
  @IsString()
  issn?: string;

  @ApiProperty({ description: 'Tópicos do artigo', type: [String] })
  @IsArray()
  @IsString({ each: true })
  topics: string[];

  @ApiProperty({ description: 'Resumo detalhado do artigo', required: false })
  @IsOptional()
  @IsString()
  abstract?: string;

  @ApiProperty({ description: 'Referências do artigo', type: [String] })
  @IsArray()
  @IsString({ each: true })
  references: string[];
}


export class UpdateArticleDto {

  @ApiProperty({ description: 'Categorias do artigo', type: [String], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  categories?: string[];

  @ApiProperty({ description: 'Resumo gerado por IA para o artigo', required: false })
  @IsOptional()
  @IsString()
  iaResume?: string;

  @ApiProperty({ description: 'Artigo enviado pelo usuario' })
  @IsString()
  text: string;

  @ApiProperty({ description: 'Título do artigo', required: false })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({ description: 'Lista de autores do artigo', type: [String], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  authors?: string[];

  @ApiProperty({ description: 'ISSN do artigo', required: false })
  @IsOptional()
  @IsString()
  issn?: string;

  @ApiProperty({ description: 'Tópicos do artigo', type: [String], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  topics?: string[];

  @ApiProperty({ description: 'Resumo do artigo', required: false })
  @IsOptional()
  @IsString()
  abstract?: string;

  @ApiProperty({ description: 'Referências do artigo', type: [String], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  references?: string[];
}
