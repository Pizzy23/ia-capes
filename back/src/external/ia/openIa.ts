import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

@Injectable()
export class OpenAIService {
  async generateText(prompt: string, instruction: string): Promise<string> {
    const messages: ChatMessage[] = [
      {
        role: 'system',
        content: instruction,
      },
      {
        role: 'user',
        content: prompt, 
      },
    ];

    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages, 
      });

      const response = completion.choices[0].message?.content ?? '';
      return response.trim();
    } catch (error: any) {
      console.error(
        'Erro ao consumir o OpenAI API:',
        error.response?.data || error.message,
      );
      throw new Error('Falha ao gerar texto com o OpenAI');
    }
  }
}
