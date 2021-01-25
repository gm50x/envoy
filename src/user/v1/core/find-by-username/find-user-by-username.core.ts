import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../domain';

@Injectable()
export class FindUserByUsername {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) { }
  async activate(username: string): Promise<User> {
    const [user] = await this.usersRepository.findByIds([username]);
    return user;
  }
}
