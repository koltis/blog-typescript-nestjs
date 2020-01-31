import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import  {CommentInterface} from './interfaces/comments.interface'
import { ErrorBadRequest } from 'src/users/errors/error.badRequest';
import { Entry } from 'src/entrys/interfaces/entry.interface';
@Injectable()
export class CommentsService {
    constructor(@InjectModel('Comment') private readonly CommentModel:Model<CommentInterface>,@InjectModel('Entry') private readonly EntryModel:Model<Entry>){}
    postingComments = async(commentDto)=>{
        try{
            const comment:CommentInterface = new this.CommentModel(commentDto)
            if(!comment){
                throw new Error('no gucci comment')
            }
            const entryExists = await this.EntryModel.findById(commentDto.entry)
            if(!entryExists){
                throw new Error('thats not an entry')
            }
            await comment.save()
            return comment
        }catch(e){
            throw new ErrorBadRequest(e)
        }
    }
    async getComments(id){
        try{
            const comments = await this.CommentModel.find({entry:id})
            if(comments.length < 1){
                throw new Error('there is no coments')
                
            }
            return comments
        }catch(e){
            throw new ErrorBadRequest(e)
            
        }
    }

}
