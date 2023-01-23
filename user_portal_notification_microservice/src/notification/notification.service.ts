import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class NotificationService {
  private logger = new Logger('NotificationService');
  constructor(private mailerService: MailerService) {}

  /**
   * @description it will send an email to the provided email id using any SMTP credntails those provided in env
   * @returns message with success status
   * @param mailOptions will be provided to whome email will be send subject and email template with custom params in json object.
   */
  async sendMail(getUserMail: string): Promise<string> {
    console.log(process.env.FROM);
    const mailOptions = {
      from: process.env.FROM,
      to: getUserMail,
      subject: process.env.SUBJECT,
      text: process.env.TEXT,
    };
    this.logger.log(
      'info',
      `Notification MS - sendMail - for ${JSON.stringify(mailOptions)}`,
    );
    await this.mailerService.sendMail(mailOptions);
    return getUserMail;
  }
}
