import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBasicAuth, ApiTags } from '@nestjs/swagger';
import { GenerateAccessToken } from 'src/auth/core/generate-access-token/generate-access-token.command';

@Controller()
@ApiTags('Auth')
@ApiBasicAuth()
@UseGuards(AuthGuard('basic'))
export class GetAccessTokenRoute {
  constructor(private readonly generateAccessToken: GenerateAccessToken) {}

  @Post('auth')
  async activate(@Request() req) {
    return this.generateAccessToken.activate(req.user);
  }
}
