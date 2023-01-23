import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { UserCreatedEvent } from './event/user-created.event';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetUserRequest } from './get-user-request.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('NOTIFICATION_SERVICE')
    private readonly notificationClient: ClientKafka,
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async handleUserCreated(userCreatedEvent: UserCreatedEvent): Promise<any> {
    const userData = await this.userCreated(userCreatedEvent);
    this.notificationClient
      .send('send_mail', new GetUserRequest(userCreatedEvent.email))
      .subscribe((email) => {
        console.log(`Confirmation Email Sent to ${email}`);
      });
    return userData;
  }

  async userCreated(createUserDto: CreateUserDto): Promise<User> {
    const { userName, email, password } = createUserDto;
    const user = new User();

    user.userName = userName;
    user.email = email;
    user.password = password;
    await this.repository.save(user);

    return user;
  }
}
