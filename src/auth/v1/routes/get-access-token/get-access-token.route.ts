import { Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBasicAuth, ApiResponse, ApiTags, } from '@nestjs/swagger';
import { Token, } from '../../domain';
import { GetAccessToken } from '../../core';
import { Response, AuthUser } from '../../../../cross/v1';
import { User } from '../../../../user/v1';

@Controller('auth')
@ApiTags('Auth')
@ApiBasicAuth()
@UseGuards(AuthGuard('basic'))
export class GetAccessTokenRoute {
  constructor(private readonly getAccessToken: GetAccessToken) { }

  @Post()
  @HttpCode(200)
  @ApiResponse({ status: 200, type: Token })
  @ApiResponse({ status: 401, type: Response })
  @ApiResponse({ status: 500, type: Response })
  async activate(@AuthUser() user: User) {
    return this.getAccessToken.activate(user);
  }
}
