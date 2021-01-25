import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../domain';

@Injectable()
export class GetAllUsers {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) { }
  async activate(): Promise<Array<User>> {
    return await this.usersRepository.find();
  }
}
