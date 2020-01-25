import { Controller, Get, Post, Body, UseGuards, Headers, Req, } from '@nestjs/common';
import {UserDto} from './dto/user.dto'
import{UsersService} from './users.service'
import { UserGuard } from './user.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}
    @Post()
    createUser(@Body()userDto:UserDto):any{
            return this.usersService.createUser(userDto)
    }
    @Post('/login')
    login(@Body() userDto:UserDto):any{
            const user = this.usersService.login(userDto)
            return user
    }
    @Get()
    @UseGuards(UserGuard)
    validateUser(@Req()req:any){
        const user = req.user
        const token = req.token
        return {user,token}
    }
}
