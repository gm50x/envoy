import { ApiResponseProperty } from "@nestjs/swagger";

export class Token {
  @ApiResponseProperty()
  accessToken: string;
}