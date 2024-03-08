import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DocumentsService } from './documents.service';

@Controller('documents')
export class DocumentsController {
    constructor(private documentService: DocumentsService){}
    @Get()
    test(){
        return this.documentService.getAllDocuments();
    }

    @Get(":id")
    getDocumentById(@Param("id") id: string){
        return this.documentService.getDocumentById(id);
    }

    @Get("full/:id")
    getDocumentDataById(@Param("id") id: string){
        return this.documentService.getDocumentById(id);
    }
    
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    create(@UploadedFile() file: Express.Multer.File, @Body() body: any){
        return this.documentService.create(file);
    }
}
