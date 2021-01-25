import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HashingModule } from '../hashing';
import {
  CreateNewUser,
  FindUserByUsername,
  GetAllUsers,
  CreateNewUserRoute,
  User,
} from './v1';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    HashingModule
  ],
  exports: [FindUserByUsername, GetAllUsers],
  providers: [
    CreateNewUser,
    FindUserByUsername,
    GetAllUsers,
  ],
  controllers: [CreateNewUserRoute],
})
export class UserModule { }
