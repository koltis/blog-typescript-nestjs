import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { User } from './interfaces/user.interface';
@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly UserModel:Model<User>){}
    async createUser(User:UserDto):Promise<User>{
        try{
            const user:User =new this.UserModel(User)
            return await user.save()
        }catch(e){
            return(e)
        }
    }
    async findAll():Promise<any>{
        try{
            return await this.UserModel.find()
        }catch(e){
            throw new Error(e)
        }
    }
}
