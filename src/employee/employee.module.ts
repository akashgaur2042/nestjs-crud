
import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeSchema } from './schemas/employee.schema';
import {  AdminSchema } from "./schemas/admin.schema";
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Employee', schema: EmployeeSchema },
     { name: 'Admin', schema: AdminSchema },
  ])
    
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmpployeeModule { }
