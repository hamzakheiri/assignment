import { Test, TestingModule } from '@nestjs/testing';
import { FormSubmitionService } from './form-submition.service';

describe('FormSubmitionService', () => {
  let service: FormSubmitionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormSubmitionService],
    }).compile();

    service = module.get<FormSubmitionService>(FormSubmitionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
