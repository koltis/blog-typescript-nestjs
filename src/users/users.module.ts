import { Module, Delete } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { APP_GUARD } from '@nestjs/core';

import { UserModel } from './modules/user.module';

@Module({
    imports:[UserModel],
    controllers:[UsersController],
    providers:[UsersService,
        {
            provide: APP_GUARD,
            useClass: UsersController,
          },
    ],
    exports: [UsersModule] 
})
export class UsersModule {
}
