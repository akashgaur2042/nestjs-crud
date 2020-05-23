import * as mongoose from 'mongoose';


export const EmployeeSchema = new mongoose.Schema({

   
    id: String,
    employee_name: String,
    employee_salary: Number,
    employee_leave: Number,

});


