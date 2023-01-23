import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { MailerModule } from '@nestjs-modules/mailer/dist';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.sendgrid.net',
        auth: {
          user: 'apikey',
          pass: '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',
        },
      },
    }),
  ],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
