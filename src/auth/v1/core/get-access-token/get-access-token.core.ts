import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Token } from '../../domain';
import { User } from '../../../../user/v1';

@Injectable()
export class GetAccessToken {
  constructor(private jwtService: JwtService) { }
  async activate(user: User): Promise<Token> {
    const payload = { sub: user.username, email: user.email };
    return { accessToken: this.jwtService.sign(payload) };
  }
}
