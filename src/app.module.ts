import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [UsersModule,MongooseModule.forRoot('mongodb://localhost:27017/proyect-1',{useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
