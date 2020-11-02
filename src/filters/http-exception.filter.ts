import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(Error, HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse();
    const request = context.getRequest();

    let status = exception.status ? exception.status : 500;

    if (exception && exception.getStatus) {
      status = exception.getStatus();
    }

    let messages = [];
    if (exception.messages && Array.isArray(exception.messages)) {
      messages = exception.messages.map((err: Error) => err.message);
    }

    response.status(status).json([exception.message, ...messages]);
  }
}
