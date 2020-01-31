import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { createContactDto } from './dto/contact.Dto';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
    constructor(private readonly contactsService:ContactsService){}
    @Post()
    postContact(@Body()contactDto:createContactDto){
        return this.contactsService.saveContact(contactDto)
    }
    @Get()
    getContacts(@Query('skip')skip:String,@Query('limit')limit:String,@Query('readed')readed:Boolean){
        return this.contactsService.seeContacts(skip,limit,readed)
    }
}
