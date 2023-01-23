import { Inject, Injectable } from '@nestjs/common';
import { CreateGatewayDto } from './dto/create-gateway.dto';
import { ClientKafka } from '@nestjs/microservices';
import { UserCreatedEvent } from './event/user-created.event';

@Injectable()
export class GatewaysService {
  constructor(
    @Inject('USER_SERVICE') private readonly userClient: ClientKafka,
  ) {}

  async signup({ userName, email, password }: CreateGatewayDto): Promise<any> {
    await this.userClient.emit(
      'user_created',
      new UserCreatedEvent(userName, email, password),
    );
    return { userName, email, password };
  }
}
