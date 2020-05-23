import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule} from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import configuration from 'config/configuration';
import {EmpployeeModule } from './employee/employee.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://testuser:testuser@cluster0-tkeng.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }),
    EmpployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
