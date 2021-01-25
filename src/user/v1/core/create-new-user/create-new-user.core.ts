import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../domain';
import { Repository } from 'typeorm';
import { HashPassword } from '../../../../hashing/v1';

@Injectable()
export class CreateNewUser {
  constructor(
    private readonly hashPassword: HashPassword,
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) { }
  async activate(user: User): Promise<void> {
    try {
      user.password = await this.hashPassword.activate(user.password);
      await this.usersRepository.insert(user);
    } catch (err) {
      throw new UnprocessableEntityException('User already exists');
    }
  }
}
