import { HttpException, HttpStatus } from "@nestjs/common";

export class ErrorAuth extends HttpException{
    constructor(e){
        super(e.message,HttpStatus.UNAUTHORIZED)
    }
}