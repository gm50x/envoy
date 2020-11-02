import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { HashModule } from './hash/hash.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './filters/http-exception.filter';

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
    HashModule,
  ],
  controllers: [],
  providers: [{ provide: APP_FILTER, useClass: HttpExceptionFilter }],
})
export class EnvoyModule {}
