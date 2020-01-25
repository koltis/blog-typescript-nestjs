import { IsEmpty, IsEmail} from 'class-validator';

export class UserDto{
    readonly name:string
    @IsEmail()
    readonly email:string
    readonly password:string
    readonly id?:string
    @IsEmpty()
    readonly rol?:number
}