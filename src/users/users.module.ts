import { Module } from '@nestjs/common';
import { UserSchema } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {jwt} from 'jsonwebtoken'
@Module({
    imports: [
        MongooseModule.forFeatureAsync([
          {
            name: 'User',
            useFactory: async() => {
            const schema = UserSchema;
            schema.statics.generateJwt= async(user)=>{
            try{
                const token = await jwt.sign({ data: user.id }, 'iqij23ij41i9und', { expiresIn: '7d' }, { algorithm: 'RS256' })
                return token
            }catch(e){
                throw new Error(e)
            }
            }
        },
          },
        ]),
      ],
    controllers:[UsersController],
    providers:[UsersService]
})
export class UsersModule {
}
