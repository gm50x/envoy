import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
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
    JwtModule.register({
      secret: 's3cr3t4jwt',
      signOptions: { expiresIn: '10s' },
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
