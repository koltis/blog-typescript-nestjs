import {Schema} from 'mongoose'
import {UserModel} from '../../users/modules/user.module'
export const commentsSchema = new Schema({
user: {
    type: Schema.Types.ObjectId,
    ref:'User',
    required: true
},
title: {
    type: String,
    required: true
},
comment: {
    type: String,
    required: true,
    trim: true
},
entry: {
    type:Schema.Types.ObjectId,
    ref:'Entry',
    required: true
}
}, { timestamps: true })