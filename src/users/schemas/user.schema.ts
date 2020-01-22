import * as mongoose from 'mongoose'
import * as validator from 'validator'


export const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        validate(value){
            const valid = validator.isEmail(value)
            if (!valid) {
                throw new Error('The emil is not valid  Lol')
            }
        return value
        }
    },
    password:{
        type:String,
        trim:true,
        required:true
    },
    tokens:[
        {
            token:{
                type:String
            }
        }
    ]
},{timestamps:true})
