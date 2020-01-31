import { IsEmail, IsPhoneNumber } from "class-validator";

export class createContactDto{
  readonly name: string;
  readonly telephone: String|Number;
  @IsEmail()
  readonly email: string;
  readonly description:string
}