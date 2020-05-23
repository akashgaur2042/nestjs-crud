import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'custom_hello';
  }

  @Post('posts')
  save(data: any) {
    console.log(data);
    
    //return this.appService.getHello();
  }
}
