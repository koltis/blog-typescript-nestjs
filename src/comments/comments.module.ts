import { Module } from '@nestjs/common';
import { EntryModel } from 'src/entrys/model/entry.model';
import { UserModel } from 'src/users/modules/user.module';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { APP_GUARD } from '@nestjs/core';
import { commentsModel } from './model/comments.model';
import { UsersService } from 'src/users/users.service';
import { UserGuard } from 'src/users/user.guard';

@Module({
    imports:[EntryModel,UserModel,commentsModel],
    controllers:[CommentsController],
    providers:[CommentsService,{
        provide:APP_GUARD,
        useClass:CommentsController
    },
UsersService,
UserGuard
]})
export class CommentsModule {}
