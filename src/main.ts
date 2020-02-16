import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize'
import fs from 'fs'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import cookieParser from 'cookie-parser'
async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./src/config/key.pem'),
    cert: fs.readFileSync('./src/config/certificate.pem'),
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  app.enableCors({origin:'http://localhost:4200',credentials:true})
  const options = new DocumentBuilder()
    .setTitle('Portfolio')
    .setDescription('blog-plus-chat')
    .setVersion('1.0')
    .addTag('Blog')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  app.use(helmet());
  app.use(mongoSanitize())
  await app.listen(3000);
}
bootstrap();
