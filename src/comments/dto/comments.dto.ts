import { IsNotEmpty } from "class-validator"

export class commentsDto{
    @IsNotEmpty()
    readonly user:String
    readonly title:String
    readonly comment:String
    readonly entry:String
}
