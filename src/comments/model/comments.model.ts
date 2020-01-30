import { MongooseModule } from '@nestjs/mongoose';
import { commentsSchema } from '../schema/comment.schema';

export const commentsModel = MongooseModule.forFeatureAsync([
    {
      name: 'Comment',
      useFactory: async() => {
        const schema = commentsSchema;
        return schema
      },
    },
  ])
