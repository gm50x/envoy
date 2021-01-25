import { Injectable } from '@nestjs/common';
import { HashPassword } from '../../../../hashing/v1';
import { FindUserByUsername, User } from '../../../../user/v1';

@Injectable()
export class VerifyUser {
  constructor(
    private readonly findUserByUsername: FindUserByUsername,
    private readonly hashPassword: HashPassword,
  ) { }
  async activate(username: string, password: string): Promise<User> {
    const [user, pwd] = await Promise.all([
      this.findUserByUsername.activate(username),
      this.hashPassword.activate(password),
    ]);
    if (user && pwd && user.password === pwd) {
      const { password, ...output } = user;
      return new User(output);
    }
    return null;
  }
}
