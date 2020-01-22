import { Controller, Get, Post, Body } from '@nestjs/common';
import {UserDto} from './dto/user.dto'
import{UsersService} from './users.service'
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}
    @Post()
    createUser(@Body()userDto:UserDto):any{
        return this.usersService.createUser(userDto)
    }
    @Get()
    findAll():any[any]{
        return this.usersService.findAll()
    }
       
}
