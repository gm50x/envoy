import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { EnvoyModule } from './envoy.module';

async function bootstrap() {
  const app = await NestFactory.create(EnvoyModule);
  const config = app.get(ConfigService);
  const port = config.get('PORT') || '3000';

  app.setGlobalPrefix('api/v1');

  const options = new DocumentBuilder()
    .setTitle('Envoy')
    .setDescription('Autonomous Authorizer')
    .setContact('Getúlio Magela Silva', 'https://github.com/gm50x', '')
    .setVersion('v1')
    .setExternalDoc('Export Specs', 'http://localhost:3000/api-docs-json')
    .addBasicAuth()
    .addBearerAuth()
    .addApiKey()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(port);
}
bootstrap();
