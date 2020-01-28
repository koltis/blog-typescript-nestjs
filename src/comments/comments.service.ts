import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import  {CommentInterface} from './interfaces/comments.interface'
import { ErrorBadRequest } from 'src/users/errors/error.badRequest';
@Injectable()
export class CommentsService {
    constructor(@InjectModel('Comment') private readonly CommentModel:Model<CommentInterface>){}
    postingComments = async(commentDto)=>{
        try{
            const comment:CommentInterface = new this.CommentModel(commentDto)
            if(!comment){
                throw new Error('no gucci comment')
            }
            await comment.save()
            return comment
        }catch(e){
            throw new ErrorBadRequest(e)
        }
    }
}
