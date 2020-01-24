import { Document } from "mongoose";

export interface User extends Document{
     name:string
     email:string
     password:string
     id?:string
     tokens:[]
     timestamps?:any
     rol:number
}