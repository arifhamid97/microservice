import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

// async function bootstrap() {
//   const app = await NestFactory.createMicroservice<MicroserviceOptions>(
//     AppModule,
//     {
//       transport: Transport.NATS,
//       options: {
//         servers: ['nats://nats'],
//       },
//     },
//   );
//   const PORT = process.env.BORROWING_PORT 
//   await app.listen().then(() => {
//     console.log('borrowing Microservice is Running!');
//   });}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.BORROWING_PORT;
  await app.listen(PORT, () => console.log(`Borrowing Microservice is Running on PORT ${PORT}`));
}


bootstrap();