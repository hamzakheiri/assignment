import { Body, Controller, Get, InternalServerErrorException, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DocumentsService } from './documents.service';
import * as mime from 'mime-types';

@Controller('documents')
export class DocumentsController {
    constructor(private documentService: DocumentsService) { }
    @Get()
    getAllDocuments() {
        return this.documentService.getAllDocuments();
    }

    @Get(":id")
    getDocumentById(@Param("id") id: string) {
        return this.documentService.getDocumentById(id);
    }

    @Get("full/:id")
    async getDocumentDataById(@Param("id") id: string, @Res() res: any) {
        try {
            const documents = await this.documentService.getFullDocumentById(id);
            const mimeType = mime.lookup(documents.title);
            console.log("mimeType: ", mimeType);
            res.setHeader('Content-Type', mimeType);
            res.setHeader('Content-Disposition', `attachment; filename=${documents.title}`);
            res.send(documents.binaryData);
            res.status(200);
        } catch (e) {
            console.log("error:", e);
            throw new InternalServerErrorException("Error while fetching the document");
        }
    }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    create(@UploadedFile() file: Express.Multer.File, @Body() body: any) {
        return this.documentService.create(file);
    }
}
