import { NestFactory } from '@nestjs/core';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerCustomOptions,
} from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Resume API')
    .setDescription(
      'Api docs for the resume api. Look and feel inspired by VS Code, my IDE of choice.',
    )
    .setVersion('0.0.1')
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };

  const document = SwaggerModule.createDocument(app, config, options);
  const customSwaggerOptions: SwaggerCustomOptions = {
    customSiteTitle: 'Resume API',
    customCssUrl: '/assets/swagger-custom.css',
    customJs: '/assets/swagger-custom.js',
  };
  SwaggerModule.setup('api-docs', app, document, customSwaggerOptions);

  await app.listen(3000);
}
bootstrap();
