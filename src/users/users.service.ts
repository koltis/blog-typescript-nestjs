import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { User } from './interfaces/user.interface';
import { UserSchema } from './schemas/user.schema';
import * as jwt from 'jsonwebtoken'
import * as bycript from 'bcryptjs'
import { keys } from 'src/config/keys';
import { ErrorAuth } from './errors/error.auth';
import { ErrorBadRequest } from './errors/error.badRequest';
@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly UserModel:Model<User>){}
    async createUser(User:UserDto):Promise<any>{
        try{
            const user:User =new this.UserModel(User)
            const token = await UserSchema.statics.generateJwt(user)
            user.rol= 1
            await user.save()
            return {user,token}
        }catch(e){
            throw new ErrorBadRequest(e)
        }
        }
    async login(User:UserDto):Promise<any>{
        try{
            const userDb = await this.UserModel.findOne({email:User.email})
            const works = await bycript.compare(User.password,userDb.password)
            if(!works){
               throw new Error('email already in use')
            }
            const token = await UserSchema.statics.generateJwt(userDb)
            userDb.save()
            return {userDb,token}
        }catch(e){
            throw new ErrorBadRequest(e)
        }
    }
    async validateUser(req:any):Promise<boolean>{
        try{
        const token = req.headers.authorization.split(' ').pop()
        const userId:any = jwt.verify(token,keys.JWTSECRET)
        const userdb = await this.UserModel.findById(userId.data)
        req.user = userdb
        req.token = token
        return userdb!=null
        }catch(e){
        throw new ErrorAuth(e)
        }
      }
    }

