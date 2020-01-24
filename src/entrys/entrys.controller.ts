import { Controller, Post, Body, Inject, UseGuards, Req } from '@nestjs/common';
import { entryDto } from './dto/entry.dto';
import { EntrysService } from './entrys.service';
import { EntryGuard } from './entry.guard';

@Controller('entrys')
export class EntrysController {
    constructor(private readonly entrysService:EntrysService){}
    @Post()
    @UseGuards(EntryGuard)
    createEntry(@Body() Entry:entryDto,@Req()req:any){
        try{
            const entry = this.entrysService.CreateEntry(Entry)
            return entry
        }catch(e){
            return e
        }
    }
}
