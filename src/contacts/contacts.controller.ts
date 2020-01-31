import { Controller, Post, Body, Get, Query, UsePipes } from '@nestjs/common';
import { createContactDto } from './dto/contact.Dto';
import { ContactsService } from './contacts.service';
import { booleanContactsPipe, numberContactsPipe } from './contacts.pipe';

@Controller('contacts')
export class ContactsController {
    constructor(private readonly contactsService:ContactsService){}
    @Post()
    postContact(@Body()contactDto:createContactDto){
        return this.contactsService.saveContact(contactDto)
    }
    @Get()
    getContacts(@Query('skip',numberContactsPipe)skip:Number,@Query('limit',numberContactsPipe)limit:Number,@Query('readed',booleanContactsPipe)readed:Boolean){
        return this.contactsService.seeContacts(skip,limit,readed)
    }
}
