import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DocumentsService } from './documents.service';

@Controller('documents')
export class DocumentsController {
    constructor(private documentService: DocumentsService){}
    @Get()
    test(){
        return "hi";
    }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    create(@UploadedFile() file: Express.Multer.File, @Body() body: any){
        return this.documentService.create(file);
    }
}
