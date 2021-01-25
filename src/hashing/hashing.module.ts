import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HashPassword } from './v1';

@Module({
  imports: [ConfigModule.forRoot()],
  exports: [HashPassword],
  providers: [HashPassword],
})
export class HashingModule { }
