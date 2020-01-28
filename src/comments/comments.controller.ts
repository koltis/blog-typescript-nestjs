import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { commentsDto } from './dto/comments.dto';
import { UserGuard } from 'src/users/user.guard';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {}
    @Post()
    @UseGuards(UserGuard)
    async postComment(@Body()commentDto:commentsDto){
        return this.commentsService.postingComments(commentDto)
    }
}
