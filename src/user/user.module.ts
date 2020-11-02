import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';
import { HashModule } from 'src/hash/hash.module';
import { CreateNewUser } from './core/create-new-user/create-new-user.command';
import { FindUserByUsername } from './core/find-by-username/find-user-by-username.command';
import { GetAllUsers } from './core/get-all-users/get-all-users.command';
import { User } from './entities/user.entity';
import { CreateNewUserRoute } from './routes/create-new-user/create-new-user.route';

@Module({
  imports: [TypeOrmModule.forFeature([User]), HashModule],
  exports: [FindUserByUsername, GetAllUsers],
  providers: [
    CreateNewUser,
    FindUserByUsername,
    GetAllUsers,
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
  ],
  controllers: [CreateNewUserRoute],
})
export class UserModule {}
