import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth';
import { UserModule } from './user';
import { HashingModule } from './hashing';
import { CrossModule } from './cross/cross.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        url: config.get('MAIN_DB'),
        autoLoadEntities: true,
      }),
    }),
    AuthModule,
    UserModule,
    HashingModule,
    CrossModule,
  ],
})
export class EnvoyModule { }
