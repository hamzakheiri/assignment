import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FormSubmition1 } from './entities/form-submition.entity';
import { Repository } from 'typeorm';
import { createInter1Dto } from './dto/create-interface1-form.dto';
import { Form3ComSubmition } from './entities/form3-submition-company.entity';
import { createForm3CompanyDto } from './dto/create-interace3-company.dto';
import { createForm3PersonalDto } from './dto/create-interace3-personal.dto';
import { Form3PerSubmition } from './entities/form3-submition-personal.entity';

@Injectable()
export class FormSubmitionService {
    constructor(
        @InjectRepository(FormSubmition1) private formSubmitionRepository: Repository<FormSubmition1>,
        @InjectRepository(Form3ComSubmition) private form3SubmitionComRepo: Repository<Form3ComSubmition>,
        @InjectRepository(Form3PerSubmition) private form3SubmitionPerRepo: Repository<Form3PerSubmition>
        ) { }

    submitInter1(data: createInter1Dto) {
        const formSubmition = this.formSubmitionRepository.create({
            ...data.managerSection, 
            ...data.siteSection,
            ...data.operatorSection
        });
        return this.formSubmitionRepository.save(formSubmition);
    }


    submitInter3Com(data: createForm3CompanyDto) {
        const formSubmition = this.form3SubmitionComRepo.create({
            ...data.top,
            ...data.bottom
        });
        return this.form3SubmitionComRepo.save(formSubmition);
    }

    submitInter3Per(data: createForm3PersonalDto) {
        const formSubmition = this.form3SubmitionPerRepo.create({
            ...data.top,
            ...data.bottom
        });
        return this.form3SubmitionPerRepo.save(formSubmition);
    }

    getFormSubmition() {
        return this.formSubmitionRepository.find();
    }

    async deleteFormSubmition(id: string) {
        const res = await this.formSubmitionRepository.findOne({where: { id: parseInt(id)}});
        if (!res)
            throw new NotFoundException(`commmand with id ${id} not found.`);
        return this.formSubmitionRepository.delete(res);
    }
}

