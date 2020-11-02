import { Module } from '@nestjs/common';
import { FindUserByUsername } from './core/find-by-username/find-user-by-username.command';
import { GetAllUsers } from './core/get-all-users/get-all-users.command';

@Module({
  providers: [FindUserByUsername, GetAllUsers],
  exports: [FindUserByUsername, GetAllUsers],
})
export class UserModule {}
