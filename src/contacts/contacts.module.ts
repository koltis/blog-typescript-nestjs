import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { ContactModel } from './model/contact.model';

@Module({
  imports:[ContactModel],
  controllers: [ContactsController],
  providers: [ContactsService]
})
export class ContactsModule {}
