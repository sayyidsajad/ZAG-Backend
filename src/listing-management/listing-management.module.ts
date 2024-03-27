import { Module } from '@nestjs/common';
import { ListingManagementService } from './listing-management.service';
import { ListingManagementController } from './listing-management.controller';
import { AppService } from 'src/app.service';

@Module({
  providers: [ListingManagementService, AppService],
  controllers: [ListingManagementController],
})
export class ListingManagementModule {}
