import { Module } from '@nestjs/common';
import { EntrysController } from './entrys.controller';
import { EntrysService } from './entrys.service';
import { APP_GUARD } from '@nestjs/core';
import { UserModel } from 'src/users/modules/user.module';
import { EntryModel } from './model/entry.model';

@Module({
    imports:[EntryModel,UserModel],
    controllers:[EntrysController],
    providers:[EntrysService,
        {
            provide: APP_GUARD,
            useClass: EntrysController,
          },],
    exports:[EntrysService]
    
})
export class EntrysModule {}
