import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Entry } from './interfaces/entry.interface';
import { Model } from 'mongoose';
import { entryDto } from './dto/entry.dto';
import {keys} from './../config/keys'
import jwt from 'jsonwebtoken'
import { User } from 'src/users/interfaces/user.interface';

@Injectable()
export class EntrysService {
    constructor(@InjectModel('Entry') private readonly EntryModel:Model<Entry>,@InjectModel('User') private readonly userModel:Model<User>){}
    async CreateEntry(EntryDto:entryDto):Promise<any>{
        try{
            const entry =new this.EntryModel(EntryDto)
            await entry.save()
            return entry
        }catch(e){
            return e
        }
    }
    async validateAdmin(req:any):Promise<boolean>{
        try{
        const token = req.headers.authorization.split(' ').pop()
        const userDb:any = jwt.verify(token,keys.JWTSECRET)
        const user:any = await this.userModel.findById(userDb.data)
        if(!user){
            return false
        }
        if(user.rol!==2){
            return false
        }
        req.user = user
        req.token = token
        return true
      }catch(e){
        throw new Error(e)
        }
    }
}
