import { CanActivate, ExecutionContext, Injectable, Body } from '@nestjs/common';
import { Observable } from 'rxjs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(@InjectModel('User') private readonly UserModel:Model<User>,private userService:UsersService){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request:any = context.switchToHttp().getRequest();
    return this.userService.validateUser(request)
  }
}
