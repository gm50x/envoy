import { Injectable } from '@nestjs/common';
import { HashPassword } from 'src/hash/core/hash-password/hash-password.command';
import { FindUserByUsername } from 'src/user/core/find-by-username/find-user-by-username.command';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class VerifyUser {
  constructor(
    private readonly findUserByUsername: FindUserByUsername,
    private readonly hashPassword: HashPassword,
  ) {}
  async activate(username: string, password: string): Promise<User> {
    const [user, pwd] = await Promise.all([
      this.findUserByUsername.activate(username),
      this.hashPassword.activate(password),
    ]);
    if (user && pwd && user.password === pwd) {
      const { password, ...output } = user;
      return output;
    }
    return null;
  }
}
