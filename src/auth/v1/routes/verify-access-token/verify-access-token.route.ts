import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from '../../../../cross/v1';

@Controller('auth')
@ApiTags('Auth')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
export class VerifyAccessTokenRoute {
  @Get()
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 401, type: Response })
  async activate() { }
}
