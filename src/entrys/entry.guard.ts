import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { EntrysService } from './entrys.service';
@Injectable()
export class EntryGuard implements CanActivate {
  constructor(private readonly entrysService:EntrysService){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request:any = context.switchToHttp().getRequest();
    return this.entrysService.validateAdmin(request)
  }

}
