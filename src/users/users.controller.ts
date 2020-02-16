import { Controller, Get, Post, Body, UseGuards, Headers, Req, Res, } from '@nestjs/common';
import {UserDto} from './dto/user.dto'
import{UsersService} from './users.service'
import { UserGuard } from './user.guard';
import { Response, request } from 'express';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}
    @Post()
    async createUser(@Body()userDto:UserDto,@Res()res:Response):Promise<any>{
            const user = await this.usersService.createUser(userDto)
            res.cookie("AuthToken",user.token,{expires:new Date(Date.now()+4800000000),httpOnly:true,secure:true}).send(user.user)
            }
    @Post('/login')
    async login(@Body() userDto:UserDto,@Res()res:Response):Promise<any>{
            const user:any = await this.usersService.login(userDto)
            res.cookie("AuthToken",user.token,{expires:new Date(Date.now()+4800000000),httpOnly:true,secure:true}).send(user.userDb)
        }
    @Get()
    @UseGuards(UserGuard)
    validateUser(@Req()req:any,@Res()res:Response){
        const user = req.user
        const token = req.token
        res.send(user)
    }
}
