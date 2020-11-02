import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport/dist/passport/passport.strategy';
import { Strategy } from 'passport-local';
import { VerifyUser } from '../core/verify-user/verify-user.command';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly verifyUser: VerifyUser) {
    super();
  }
  async validate(username: string, password: string): Promise<any> {
    const user = await this.verifyUser.activate(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
