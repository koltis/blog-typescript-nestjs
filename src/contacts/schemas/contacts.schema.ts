import { Schema } from "mongoose";
import * as validator from 'validator'
export const contactsSchema = new Schema(
    {
        name:{
            type:String,
            trim:true,
            required:true
        },
        email:{
            type:String,
            trim:true,
            required:true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error('thats not an email')
                }
                return value
            }
        },
        telephone:{
            type:String,
            required:true,
            validate(value){
                if(!validator.isMobilePhone(value)){
                    throw new Error('thats not a phoneNumber')
                }
                return value
            }
        },
        description:{
            type:String,
            trim:true,
            required:true
        },
        readed:{
            type:Boolean,
            required:true
        }
    },{
        timestamps:true
    }
)