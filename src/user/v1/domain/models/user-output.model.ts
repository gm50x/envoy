import { ApiResponseProperty } from "@nestjs/swagger";

export class UserOutput {
  @ApiResponseProperty()
  username: string;

  @ApiResponseProperty()
  email: string;
}