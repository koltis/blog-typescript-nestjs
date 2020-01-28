import {Document} from 'mongoose'
export interface CommentInterface extends Document{
    id_:String
    user:String
    title:String
    comment:String
    entry:String
    timesSramp:String
}