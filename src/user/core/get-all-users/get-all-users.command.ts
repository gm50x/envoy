import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class GetAllUsers {
  async activate(): Promise<Array<User>> {
    return Promise.resolve([
      {
        id: 1,
        name: 'Getúlio Magela Silva',
        username: 'gm50x',
        password: 'pwd4gm50x',
      },
    ]);
  }
}
