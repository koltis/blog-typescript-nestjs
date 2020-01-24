import { Module } from '@nestjs/common';
import { EntrysController } from './entrys.controller';
import { EntrysService } from './entrys.service';
import { APP_GUARD } from '@nestjs/core';
import { UserModel } from 'src/users/modules/user.module';
import { EntryModule } from './model/entry.model';

@Module({
    imports:[EntryModule,UserModel],
    controllers:[EntrysController],
    providers:[EntrysService,
        {
            provide: APP_GUARD,
            useClass: EntrysController,
          },],
    
})
export class EntrysModule {}
