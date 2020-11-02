import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { HashModule } from 'src/hash/hash.module';
import { UserModule } from 'src/user/user.module';
import { GenerateAccessToken } from './core/generate-access-token/generate-access-token.command';
import { VerifyUser } from './core/verify-user/verify-user.command';
import { GetAccessTokenRoute } from './routes/get-access-token/get-access-token.route';
import { VerifyAccessTokenRoute } from './routes/verify-access-token/verify-access-token.route';
import { BasicStrategy } from './strategies/basic.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    UserModule,
    HashModule,
    ConfigModule,
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
  ],
  providers: [
    VerifyUser,
    GenerateAccessToken,
    BasicStrategy,
    JwtStrategy,
    LocalStrategy,
  ],
  controllers: [GetAccessTokenRoute, VerifyAccessTokenRoute],
})
export class AuthModule {}
