import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { FormSubmitionService } from './form-submition.service';
import { createInter1Dto } from './dto/create-interface1-form.dto';
import { createForm3CompanyDto } from './dto/create-interace3-company.dto';
import { createForm3PersonalDto } from './dto/create-interace3-personal.dto';

@Controller('form-submition')
export class FormSubmitionController {
    constructor(
        private formSubmitionService: FormSubmitionService) {}

    @Post('interface1')
    submitFom1(@Body() formData: createInter1Dto ) {
        return this.formSubmitionService.submitInter1(formData);
    }

    @Post('interface3/company')
    submitFom3Com(@Body() formData: createForm3CompanyDto ) {
        return this.formSubmitionService.submitInter3Com(formData);;
    }

    @Post('interface3/personal')
    submitFom3Per(@Body() formData: createForm3PersonalDto ) {
        // console.log(formData);
        return this.formSubmitionService.submitInter3Per(formData);;
        // return ;
    }
    
    @Get()
    getFormSubmition() {
        // console.log('getFormSubmition');
        return this.formSubmitionService.getFormSubmition();
    }

    @Delete('/:id')
    deleteFormSubmition(@Param('id') id: string) {
        return this.formSubmitionService.deleteFormSubmition(id);
    }
}