import {Document} from 'mongoose'
export interface Entry extends Document {
    _id:string
    author:string
    content:string
    title:String
    subtitle:string
    summary:string
    imagenpost:string
    timestamps:string
}