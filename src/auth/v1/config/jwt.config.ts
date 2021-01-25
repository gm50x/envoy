import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModuleOptions, JwtModuleAsyncOptions } from "@nestjs/jwt";
export class JwtConfig implements JwtModuleAsyncOptions {
  imports: Array<any>;
  inject: Array<any>;
  useFactory: (...args: any[]) => JwtModuleOptions | Promise<JwtModuleOptions>;

  constructor() {
    this.imports = [
      ConfigModule.forRoot(),
    ];
    this.inject = [
      ConfigService,
    ];

    this.useFactory = (config: ConfigService) => ({
      secret: config.get('JWT_SECRET') || 's3cr3t4jwt',
      signOptions: {
        expiresIn: config.get('JWT_EXPIRATION'),
      },
    });
  }
}