import { Module } from '@nestjs/common';
import { ListingManagementService } from './listing-management.service';
import { ListingManagementController } from './listing-management.controller';
import { AppService } from 'src/app.service';
import { DatabaseModule } from 'src/config/database/database.module';
import { listingProviders } from './listing-management.providers';

@Module({
  imports: [DatabaseModule],
  providers: [ListingManagementService, AppService, ...listingProviders],
  controllers: [ListingManagementController],
})
export class ListingManagementModule {}
