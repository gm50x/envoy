import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from '../../../../cross/v1';
import { CreateNewUser } from '../../core';
import { UserInput } from '../../domain';

@Controller('users')
@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
export class CreateNewUserRoute {
  constructor(private readonly createNewUser: CreateNewUser) { }
  @Post()
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 422, type: Response })
  @ApiResponse({ status: 500, type: Response })
  async activate(@Body() input: UserInput) {
    await this.createNewUser.activate(input);
  }
}
