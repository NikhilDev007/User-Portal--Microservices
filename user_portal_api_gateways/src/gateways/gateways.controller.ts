import { Body, Controller, Post } from '@nestjs/common';
import { GatewaysService } from './gateways.service';
import { CreateGatewayDto } from './dto/create-gateway.dto';

@Controller()
export class GatewaysController {
  constructor(private readonly gatewaysService: GatewaysService) {}

  @Post()
  async createUser(@Body() creatUserDto: CreateGatewayDto): Promise<any> {
    return await this.gatewaysService.signup(creatUserDto);
  }
}
