import { MongooseModule } from "@nestjs/mongoose";
import { contactsSchema } from "../schemas/contacts.schema";

export const ContactModel = MongooseModule.forFeatureAsync([
    {
        name: 'Contact',
        useFactory: () => {
          const schema = contactsSchema;
          return schema;
        },
      },
])
