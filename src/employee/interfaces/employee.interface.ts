import { Document } from 'mongoose';

export interface Employee extends Document {
    
    readonly id: string;
    readonly employee_name: string;
    readonly employee_salary: number;
    readonly employee_leave:number;
  
    

}