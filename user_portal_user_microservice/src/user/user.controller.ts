import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { UserService } from './user.service';
import { EventPattern } from '@nestjs/microservices';
import { ClientKafka } from '@nestjs/microservices/client';

@Controller()
export class UserController implements OnModuleInit {
  constructor(
    private readonly userService: UserService,
    @Inject('NOTIFICATION_SERVICE')
    private readonly notificationClient: ClientKafka,
  ) {}

  @EventPattern('user_created')
  async handleUserCreated(data: any): Promise<any> {
    return this.userService.handleUserCreated(data);
  }

  onModuleInit() {
    this.notificationClient.subscribeToResponseOf('send_mail');
  }
}
