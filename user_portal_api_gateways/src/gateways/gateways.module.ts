import { Module } from '@nestjs/common';
import { GatewaysService } from './gateways.service';
import { GatewaysController } from './gateways.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'user_microservice',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'user-credential',
          },
        },
      },
    ]),
  ],
  controllers: [GatewaysController],
  providers: [GatewaysService],
})
export class GatewaysModule {}
