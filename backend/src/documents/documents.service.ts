import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Document } from './entities/document.entity';

@Injectable()
export class DocumentsService {
    constructor(
        @InjectRepository(Document)
        private documentRepository: Repository<Document>
    ){}

    create(formData: Express.Multer.File){
        const document = this.documentRepository.create({ 
            title: formData.originalname,
            size: formData.size,
            binaryData: formData.buffer
        });

        return this.documentRepository.save(document);
    }

    async getDocumentById(id: string){
        if (isNaN(parseInt(id))) throw new BadRequestException('Invalid id provided');
        const document = await this.documentRepository.findOne({
            select: ['id', 'title', 'size'],
            where: {id: parseInt(id)}
        });
        if (!document) throw new NotFoundException('Document not found');
        return document;
    }

    async getFullDucomentById(id: string){
        if (isNaN(parseInt(id))) throw new BadRequestException('Invalid id provided');
        const document = await this.documentRepository.findOne({where: {id: parseInt(id)}});
        if (!document) throw new NotFoundException('Document not found');
        return document;
    }
    getAllDocuments(){
        return this.documentRepository.find({select: ['id', 'title', 'size']});
    }
}
