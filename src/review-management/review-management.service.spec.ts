import { Test, TestingModule } from '@nestjs/testing';
import { ReviewManagementService } from './review-management.service';

describe('ReviewManagementService', () => {
  let service: ReviewManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReviewManagementService],
    }).compile();

    service = module.get<ReviewManagementService>(ReviewManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
