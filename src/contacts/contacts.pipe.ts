import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class booleanContactsPipe implements PipeTransform {
  transform(readed: any, metadata: ArgumentMetadata) {
    return readed!=="false"
  }
}
@Injectable()
export class numberContactsPipe implements PipeTransform{
  transform(string:any,metadata:ArgumentMetadata){
    return Number(string)
  }
}

