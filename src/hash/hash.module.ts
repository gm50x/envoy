import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Hash } from 'crypto';
import { HashPassword } from './core/hash-password/hash-password.command';

@Module({
  imports: [ConfigModule],
  exports: [HashPassword],
  providers: [HashPassword],
})
export class HashModule {}
