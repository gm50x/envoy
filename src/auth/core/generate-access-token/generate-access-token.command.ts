import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class GenerateAccessToken {
  constructor(private jwtService: JwtService) {}
  async activate(user: User): Promise<any> {
    const payload = { username: user.username, sub: user.username };
    return { access_token: this.jwtService.sign(payload) };
  }
}
