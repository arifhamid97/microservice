import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NatsClientModule } from './nats-client/nats-client.module';
import { FineModule } from './fine/fine.module';

@Module({
  imports: [NatsClientModule, FineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
