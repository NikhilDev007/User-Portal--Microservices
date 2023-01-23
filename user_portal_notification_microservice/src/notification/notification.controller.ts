import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { NotificationService } from './notification.service';


@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

   /**
   * This micorservice used to send confirmation email to user who has recently registered.
   * @param data this contains the email id of user who registered 
   * @returns the success message.
   */
  @MessagePattern('send_mail')
  sendMail(data: any) {
    return this.notificationService.sendMail(data.email);
  }
}
