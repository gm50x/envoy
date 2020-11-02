import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { GetAllUsers } from '../get-all-users/get-all-users.command';

@Injectable()
export class FindUserByUsername {
  constructor(private readonly getAllUsers: GetAllUsers) {}
  async activate(username: string): Promise<User> {
    return (await this.getAllUsers.activate()).find(
      x => x.username === username,
    );
  }
}
