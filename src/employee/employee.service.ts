import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './interfaces/employee.interface';
import { CreateEmployeeDTO } from './dto/create-employee.dto';
import { Admin } from "./interfaces/admin.interface";

@Injectable()
export class EmployeeService {
    constructor(
        @InjectModel('Employee') private readonly employeeModel: Model<Employee>, 
        @InjectModel('Admin') private readonly adminModel: Model<Admin>) { }
    
    // Fetch all employee
    async getAllEmployee(): Promise<Employee[]> {
        const employee = await this.employeeModel.find().exec();
        return employee;
    }

    // Get all admins and respective details
    async getAlllogins(): Promise<Admin[]> {
        const employee = await this.adminModel.find().exec();
        return employee;
    }
    // Get a single employee
    async getEmployee(id): Promise<Employee[]> {
        const employee = await this.employeeModel.find({id}).exec();
        return employee;
    }

    // Get Admin username and password
    async getEmployeeUsername(username): Promise<Admin[]> {
        const admin = await this.adminModel.find({'username':username}).exec();
        return admin;
    }

    // Post a single employee
    async addEmployee(createEmployeeDTO: CreateEmployeeDTO): Promise<Employee> {
        const newEmployee = await  this.employeeModel.create(createEmployeeDTO);
        return newEmployee.save();
    }

    // Add admin username and password
    async addLogin(): Promise<Admin> {
        const newEmployee = await  this.adminModel.create( {
            username: "Akash",
            password: "admin"
        },
        {
            username:"Aman",
            password:"admin"
        });
        return newEmployee.save();
    }
    
    // Edit employee details
    async updateEmployee(id, createEmployeeDTO: CreateEmployeeDTO): Promise<Employee> {
        const updatedEmployee = await this.employeeModel
            . findOneAndUpdate(id, createEmployeeDTO, { new: true });
        return updatedEmployee;
    }
    
    // Delete a employee
    async deleteEmployee(id): Promise<Employee> {
        const deletedEmployee = await this.employeeModel.findOneAndDelete();
        return deletedEmployee;
    }
}