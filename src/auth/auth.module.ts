import { Module } from '@nestjs/common';
import {
  ConfigModule,
  ConfigService
} from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { HashingModule } from '../hashing';
import { UserModule } from '../user';
import {
  GetAccessToken,
  GetAccessTokenRoute,
  VerifyUser,
  VerifyAccessTokenRoute,
  BasicStrategy,
  JwtStrategy,
  JwtConfig,
} from './v1';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot(),
    JwtModule.registerAsync({
      imports: [ConfigModule.forRoot()],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => new JwtConfig(config)
        .createJwtOptions(),
    }),
    HashingModule,
  ],
  providers: [
    VerifyUser,
    GetAccessToken,
    BasicStrategy,
    JwtStrategy,
  ],
  controllers: [
    GetAccessTokenRoute,
    VerifyAccessTokenRoute,
  ],
})
export class AuthModule { }
