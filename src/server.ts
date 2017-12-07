import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as express from 'express';

async function bootstrap() {
  const app: any = await NestFactory.create(ApplicationModule);
  app.use('/uploads', express.static('./uploads'));
  await app.listen(3000);
}
bootstrap();
