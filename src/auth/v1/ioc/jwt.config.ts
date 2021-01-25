import { ConfigService } from "@nestjs/config";
import { JwtModuleOptions, JwtOptionsFactory } from "@nestjs/jwt";

export class JwtConfig implements JwtOptionsFactory {
  constructor(private readonly config: ConfigService) { }
  createJwtOptions(): JwtModuleOptions | Promise<JwtModuleOptions> {
    console.log(this.config)
    return {
      secret: this.config.get('JWT_SECRET') || 's3cr3t4jwt',
      signOptions: {
        expiresIn: this.config.get('JWT_EXPIRATION'),
      },
    }
  }

}