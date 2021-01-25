import { Module } from '@nestjs/common';
import {
  ConfigModule,
  ConfigService
} from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { HashingModule } from '../hashing';
import { UserModule } from '../user';
import {
  BasicStrategy,
  GenerateAccessToken,
  GetAccessTokenRoute,
  JwtStrategy,
  LocalStrategy,
  VerifyAccessTokenRoute,
  VerifyUser
} from './v1';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot(),
    JwtModule.registerAsync({
      imports: [ConfigModule.forRoot()],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get('JWT_SECRET') || 's3cret4jwt',
        signOptions: {
          expiresIn: config.get('JWT_EXPIRATION') || '5m',
        },
      }),
    }),
    HashingModule,
  ],
  providers: [
    VerifyUser,
    GenerateAccessToken,
    BasicStrategy,
    JwtStrategy,
    // LocalStrategy,
  ],
  controllers: [
    GetAccessTokenRoute,
    VerifyAccessTokenRoute
  ],
})
export class AuthModule { }
