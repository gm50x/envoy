import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Token } from '../../domain';
import { User } from '../../../../user/v1';

@Injectable()
export class GenerateAccessToken {
  constructor(private jwtService: JwtService) { }
  async activate(user: User): Promise<Token> {
    const payload = { sub: user.username };
    return { accessToken: this.jwtService.sign(payload) };
  }
}
