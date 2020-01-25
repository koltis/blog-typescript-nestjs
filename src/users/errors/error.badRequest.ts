import { HttpException, HttpStatus } from "@nestjs/common";

export class ErrorBadRequest extends HttpException{
    constructor(e){
        super(e.message,HttpStatus.BAD_REQUEST)
    }
    
}