import { Injectable } from '@nestjs/common';
import { FindUserByUsername } from 'src/user/core/find-by-username/find-user-by-username.command';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class VerifyUser {
  constructor(private readonly findUserByUsername: FindUserByUsername) {}
  async activate(username: string, password: string): Promise<User> {
    const user = await this.findUserByUsername.activate(username);
    if (user && user.password === password) {
      const { password, ...output } = user;
      return output;
    }
    return null;
  }
}
