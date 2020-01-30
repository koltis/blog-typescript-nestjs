import { Controller, Post, Body, Inject, UseGuards, Req, Get, Query, Param } from '@nestjs/common';
import { entryDto } from './dto/entry.dto';
import { EntrysService } from './entrys.service';
import { EntryGuard } from './entry.guard';

@Controller('entrys')
export class EntrysController {
    constructor(private readonly entrysService:EntrysService){}
    @Post()
    @UseGuards(EntryGuard)
    createEntry(@Body() Entry:entryDto,@Req()req:any){
            const entry = this.entrysService.CreateEntry(Entry)
            return entry
    }
    @Get()
    getEntrys(@Query('skip')skip:string){
        return this.entrysService.paginate(Number(skip))
    }
    @Get(':id')
    getEntryAndComents(@Param('id')id:string){
        return this.entrysService.searchEntryAndComents(id)
    }
}
