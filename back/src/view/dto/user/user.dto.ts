import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Email do usuário' })
  @IsString()
  email: string;

  @ApiProperty({ description: 'Senha do usuário' })
  @IsString()
  password: string;

  @ApiProperty({ description: 'Profissão do usuário' })
  @IsString()
  profession: string;

}

export class UpdateUserDto {
  @ApiProperty({ description: 'Email do usuário', required: false })
  @IsOptional()
  @IsString()
  email?: string;

  @ApiProperty({ description: 'Senha do usuário', required: false })
  @IsOptional()
  @IsString()
  password?: string;

  @ApiProperty({ description: 'Profissão do usuário', required: false })
  @IsOptional()
  @IsString()
  profession?: string;
}
