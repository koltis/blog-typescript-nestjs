import { Controller, Get, Post, Body, UseGuards, Headers, Req, } from '@nestjs/common';
import {UserDto} from './dto/user.dto'
import{UsersService} from './users.service'
import { User } from './interfaces/user.interface';
import { UserGuard } from './user.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}
    @Post()
    createUser(@Body()userDto:UserDto):any{
        try{
            return this.usersService.createUser(userDto)
        }catch(e){
            return e
        }
    }
    @Post('/login')
    login(@Body() userDto:UserDto):any{
        try{
            const user = this.usersService.login(userDto)
            return user
        }catch(e){
            return e
        }
    }
    @Get()
    @UseGuards(UserGuard)
    validateUser(@Req()req:any){
        try{
        const user = req.user
        const token = req.token
        return {user,token}
        }catch(e){
            return e
        }
    }
}
