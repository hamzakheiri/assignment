import { Test, TestingModule } from '@nestjs/testing';
import { FormSubmitionController } from './form-submition.controller';

describe('FormSubmitionController', () => {
  let controller: FormSubmitionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormSubmitionController],
    }).compile();

    controller = module.get<FormSubmitionController>(FormSubmitionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
