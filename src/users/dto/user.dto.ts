import { IsEmpty} from 'class-validator';

export class UserDto{
    readonly name:string
    readonly email:string
    readonly password:string
    readonly id?:string
    @IsEmpty()
    readonly rol?:number
}