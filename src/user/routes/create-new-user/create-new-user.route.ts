import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateNewUser } from 'src/user/core/create-new-user/create-new-user.command';
import { User } from 'src/user/entities/user.entity';

@Controller('users')
@ApiTags('Users')
export class CreateNewUserRoute {
  constructor(private readonly createNewUser: CreateNewUser) {}
  @Post()
  async activate(@Body() input: User) {
    await this.createNewUser.activate(input);
  }
}
