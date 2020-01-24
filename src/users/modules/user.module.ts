import { MongooseModule } from "@nestjs/mongoose"
import { UserSchema } from "../schemas/user.schema"
import jwt from 'jsonwebtoken'
import { keys } from "src/config/keys"
import { User } from "../interfaces/user.interface"
import bcrypit from 'bcryptjs'
export  const UserModel =MongooseModule.forFeatureAsync([
    {
      name: 'User',
      useFactory: async() => {
        UserSchema.statics.generateJwt = async(user) => {
            try {
                const token =  jwt.sign({ data: user.id }, keys.JWTSECRET ,{ expiresIn: '7d' })
                const BearerToken = `Bearer ${token}`
                user.tokens = [...user.tokens, { token: BearerToken }]
                return BearerToken
            } catch (e) {
                throw new Error('lol this generateJwt failed? :c')
            }
        }
        UserSchema.pre('save',async function(){
            const user:User = this as User
            if(!user.isModified('password')){
                return
            }
            try{
                const salt = await bcrypit.genSalt(12)
                const hashedPassword = await bcrypit.hash(user.password, salt)
                user.password = hashedPassword
            }catch(e){
                throw new Error(e)
            }
        })
        UserSchema.methods.toJSON = function(){
            const user = this
            const userObject = user.toObject()
            delete userObject.password
            delete userObject.tokens
            return userObject
        }
        return UserSchema
      },
    },
  ])
