import { Schema } from "mongoose";
import { UserSchema } from "src/users/schemas/user.schema";

export const entrySchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    subtitle: {
        type: String,
        required: true,
        trim: true
    },
    summary: {
        type: String,
        required: true,
        trim: true
    },
    imagenpost: {
        type: String,
        trim: true,
        required: true
    }
}, { timestamps: true })