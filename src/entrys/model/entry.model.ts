import { MongooseModule } from "@nestjs/mongoose"
import { entrySchema } from "../schemas/entry.schema"

export const EntryModule =MongooseModule.forFeatureAsync([{
    name:'Entry',
    useFactory:()=>{
        const schema = entrySchema
        return schema
    }
}])