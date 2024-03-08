import { Module } from '@nestjs/common';
import { FormSubmitionController } from './form-submition.controller';
import { FormSubmitionService } from './form-submition.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormSubmition1 } from './entities/form-submition.entity';
import { Form3ComSubmition } from './entities/form3-submition-company.entity';
import { Form3PerSubmition } from './entities/form3-submition-personal.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      FormSubmition1,
      Form3ComSubmition, 
      Form3PerSubmition])
  ],
  controllers: [FormSubmitionController],
  providers: [FormSubmitionService]
})
export class FormSubmitionModule {}
