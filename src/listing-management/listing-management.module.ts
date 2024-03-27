import { Module } from '@nestjs/common';
import { ListingManagementService } from './listing-management.service';
import { ListingManagementController } from './listing-management.controller';

@Module({
  providers: [ListingManagementService],
  controllers: [ListingManagementController]
})
export class ListingManagementModule {}
