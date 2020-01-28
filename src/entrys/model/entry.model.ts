import { MongooseModule } from "@nestjs/mongoose"
import { entrySchema } from "../schemas/entry.schema"

export const EntryModel =MongooseModule.forFeatureAsync([{
    name:'Entry',
    useFactory:()=>{
        const schema = entrySchema
        return schema
    }
}])