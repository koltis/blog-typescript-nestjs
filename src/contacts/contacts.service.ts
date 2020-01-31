import { Injectable, Inject } from '@nestjs/common';
import { contactInterface } from './interfaces/contact.inteface';
import { Model } from 'mongoose';
import { ErrorBadRequest } from 'src/users/errors/error.badRequest';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ContactsService {
    constructor(@InjectModel('Contact') private readonly ContactModel:Model<contactInterface>){}
     async saveContact(contactDto){
        try{
            const contact = new this.ContactModel(contactDto)
            if(!contact){
                throw new Error('no contact')
            }
            contact.readed=false
            return  await contact.save()
        }catch(e){
            throw new ErrorBadRequest(e)
        }
    }
    async seeContacts(limit,skip,readed){
        try{
            const contacts:contactInterface[]= await this.ContactModel.find({readed:readed}).limit(limit).skip(skip)
            if(!contacts){
                throw new Error('no contacts')
            }
            if(!readed){
                contacts.forEach(contact=>{
                    contact.readed=true
                    contact.save()
                })
            }
            return contacts
        }catch(e){
            throw new ErrorBadRequest(e)
        }
    }
}
