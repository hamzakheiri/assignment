import { Injectable } from '@nestjs/common';
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

    async getDocumentById(id: number){
        const document = await this.documentRepository.findOne({where: {id}});
        if (!document) throw new Error('Document not found');

        return document;
    }

    getAllDocuments(){
        return this.documentRepository.find();
    }
}
