import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateNewUser } from '../../core';
import { UserInput } from '../../domain';

@Controller('users')
@ApiTags('Users')
export class CreateNewUserRoute {
  constructor(private readonly createNewUser: CreateNewUser) { }
  @Post()
  async activate(@Body() input: UserInput) {
    await this.createNewUser.activate(input);
  }
}
