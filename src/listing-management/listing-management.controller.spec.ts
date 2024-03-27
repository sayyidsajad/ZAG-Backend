import { Test, TestingModule } from '@nestjs/testing';
import { ListingManagementController } from './listing-management.controller';

describe('ListingManagementController', () => {
  let controller: ListingManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListingManagementController],
    }).compile();

    controller = module.get<ListingManagementController>(ListingManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
