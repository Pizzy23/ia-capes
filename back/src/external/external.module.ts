import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { OpenAIService } from './ia/openIa';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://api.openai.com/v1',
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  ],
  providers: [OpenAIService],
  exports: [OpenAIService],
})
export class OpenAIModule {}
