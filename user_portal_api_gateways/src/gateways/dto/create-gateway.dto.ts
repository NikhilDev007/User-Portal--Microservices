import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateGatewayDto {
  @IsNotEmpty()
  userName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
