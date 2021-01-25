import { Injectable, UnauthorizedException } from '@nestjs/common';
import { BasicStrategy as Strategy } from 'passport-http';
import { PassportStrategy } from '@nestjs/passport';
import { VerifyUser } from '../core';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
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
