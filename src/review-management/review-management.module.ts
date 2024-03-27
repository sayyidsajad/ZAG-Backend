import { Module } from '@nestjs/common';
import { ReviewManagementService } from './review-management.service';
import { ReviewManagementController } from './review-management.controller';
import { AppService } from 'src/app.service';
import { DatabaseModule } from 'src/config/database/database.module';
import { listingProviders } from 'src/listing-management/listing-management.providers';

@Module({
  imports: [DatabaseModule],
  providers: [ReviewManagementService, AppService, ...listingProviders],
  controllers: [ReviewManagementController],
})
export class ReviewManagementModule {}
