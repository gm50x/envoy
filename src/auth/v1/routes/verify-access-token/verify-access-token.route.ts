import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
export class VerifyAccessTokenRoute {
  @Get()
  async activate() { }
}
