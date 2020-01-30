import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Entry } from './interfaces/entry.interface';
import { Model } from 'mongoose';
import { entryDto } from './dto/entry.dto';
import {keys} from './../config/keys'
import jwt from 'jsonwebtoken'
import { User } from 'src/users/interfaces/user.interface';
import { ErrorAuth } from 'src/users/errors/error.auth';
import { ErrorBadRequest } from 'src/users/errors/error.badRequest';

@Injectable()
export class EntrysService {
    constructor(@InjectModel('Entry') private readonly EntryModel:Model<Entry>,@InjectModel('User') private readonly userModel:Model<User>){}
    async CreateEntry(EntryDto:entryDto):Promise<any>{
        try{
            const entry =new this.EntryModel(EntryDto)
            await entry.save()
            return entry
        }catch(e){
            throw new ErrorBadRequest(e)
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
            throw new Error('Unauthorized')
        }
        req.user = user
        req.token = token
        return true
      }catch(e){
        throw new ErrorAuth(e)
        }
    }
    async paginate(skip):Promise<any>{
    try{
        const arrOfEntry = await this.EntryModel.find().limit(2).skip(skip)
        if(arrOfEntry.length<1){
            throw new Error('this is not working sorry :c')
        }
        return arrOfEntry
    }catch(e){
        throw new ErrorBadRequest(e)
    }
    }
    async searchEntryAndComents(id):Promise<any>{
        try{    
            const entry:any = await this.EntryModel.findById(id)
            if(!entry){
                throw new Error('that entry doesnt exist')
                
            }
            const author = await this.userModel.findById(entry.author)
            if(!author){
                throw new Error('No author')
            }
            return entry.author = author
        }catch(e){
            throw new ErrorBadRequest(e)
            
        }
    }
}
