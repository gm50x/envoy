import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindUserByUsername {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}
  async activate(username: string): Promise<User> {
    const [user] = await this.usersRepository.findByIds([username]);
    return user;
  }
}
