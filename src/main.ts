import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { EnvoyModule } from './envoy.module';

async function bootstrap() {
  const app = await NestFactory.create(EnvoyModule);

  app.setGlobalPrefix('api/v1');

  const options = new DocumentBuilder()
    .setTitle('Envoy')
    .setDescription('Autonomous Authorizer')
    .setContact('Getúlio Magela Silva', 'https://github.com/gm50x', '')
    .setVersion('v1')
    .setExternalDoc('Export Specs', 'http://localhost:3001/api-docs-json')
    .addBasicAuth()
    .addBearerAuth()
    .addApiKey()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3001);
}
bootstrap();
