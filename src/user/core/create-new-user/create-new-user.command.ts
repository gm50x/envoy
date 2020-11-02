import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../user/entities/user.entity';
import { Repository } from 'typeorm';
import { HashPassword } from '../../../hash/core/hash-password/hash-password.command';

@Injectable()
export class CreateNewUser {
  constructor(
    private readonly hashPassword: HashPassword,
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}
  async activate(user: User): Promise<any> {
    user.password = await this.hashPassword.activate(user.password);
    await this.usersRepository.insert(user);
  }
}
