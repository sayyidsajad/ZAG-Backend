import { Test, TestingModule } from '@nestjs/testing';
import { ReviewManagementController } from './review-management.controller';

describe('ReviewManagementController', () => {
  let controller: ReviewManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviewManagementController],
    }).compile();

    controller = module.get<ReviewManagementController>(ReviewManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
