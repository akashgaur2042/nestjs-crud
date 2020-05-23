import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDTO } from './dto/create-employee.dto';
import { CreateAdminDTO } from './dto/create-admin.dto';


@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService) { }

    // add a employee
    @Post('create')
    async addEmployee(@Res() res, @Body() createEmployeeDTO: CreateEmployeeDTO) {
        const employee = await this.employeeService.addEmployee(createEmployeeDTO);
        return res.status(HttpStatus.OK).json({
            message: "Employee has been created successfully",
            employee
        })
    }

    // Retrieve employee list
    @Get('employees')
    async getAllCustomer(@Res() res) {
        const employees = await this.employeeService.getAllEmployee();
        return res.status(HttpStatus.OK).json(employees);
    }

    // Fetch a particular employee using ID
    @Get(':id')
    async getEmployee(@Res() res, @Param('id') id) {
        // console.log(id);
        const employee = this.employeeService.getEmployeeUsername(id);
        // console.log(id);
        if (!employee) throw new NotFoundException('employee does not exist!');
        return res.status(HttpStatus.OK).json(employee);
    }

    // Update a employee's details
    @Put('update/:id')
    async updateEmployee(@Res() res, @Query('id') id, @Body() createEmployeeDTO: CreateEmployeeDTO) {
        const employee = await this.employeeService.updateEmployee(id, createEmployeeDTO);
        if (!employee) throw new NotFoundException('Employee does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Customer has been successfully updated',
            employee
        });
    }

    //login admin
    @Post('login')
    async login(@Res() res, @Body() adminDetails: any) {
        const emps = await this.employeeService.getAlllogins();
        const admin = await this.employeeService.getEmployeeUsername(adminDetails.username);

        if (emps[0].username != adminDetails.username) {
            return res.status(HttpStatus.OK).json({

                message: "User not found",
            });
        }
        else if (admin[0].password != adminDetails.password) {


            return res.status(HttpStatus.OK).json({

                message: "Password Incorrect",
            });
        }
        else {
            return res.status(HttpStatus.OK).json({
                message: 'Admin has been successfully Logged-in',
                isCorrect: true,
                user: admin[0],
            });
        }
    }

    // Delete a customer
    @Delete('delete/:id')
    async deleteEmployee(@Res() res, @Param('id') id) {
        const employee = await this.employeeService.deleteEmployee(id);

        if (!employee) throw new NotFoundException('Employee does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Employee has been deleted',
            employee
        })
    }
}