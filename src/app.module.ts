import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {MongooseModule} from '@nestjs/mongoose'
import { EntrysModule } from './entrys/entrys.module';
import { CommentsModule } from './comments/comments.module';
import { ContactsModule } from './contacts/contacts.module';



@Module({
  imports: [UsersModule,MongooseModule.forRoot('mongodb://localhost:27017/proyect-1',{useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true}), EntrysModule,CommentsModule, ContactsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
