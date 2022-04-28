import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/AppModule';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

const bootstrap = async () => {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'auth-consumer'
      }
    }
  });
  await app.listen();
}

bootstrap();