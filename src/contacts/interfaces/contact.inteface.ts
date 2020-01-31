import {Document} from 'mongoose'
export interface contactInterface extends Document{
    name:String
    email:String
    telephone:String
    description:String
    timesStamp:String
    readed:Boolean
}