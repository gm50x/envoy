import { ApiResponseProperty } from "@nestjs/swagger";

export class Response {
  @ApiResponseProperty()
  statusCode: number;
  @ApiResponseProperty()
  message: string;
}