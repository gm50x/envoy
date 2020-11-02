import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createHmac } from 'crypto';

@Injectable()
export class HashPassword {
  constructor(private readonly config: ConfigService) {}
  async activate(password: string): Promise<string> {
    const key = this.config.get('HASH_KEY');
    return Promise.resolve(
      createHmac('sha256', key)
        .update(password)
        .digest('hex'),
    );
  }
}
