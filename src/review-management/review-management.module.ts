import { Module } from '@nestjs/common';
import { ReviewManagementService } from './review-management.service';
import { ReviewManagementController } from './review-management.controller';

@Module({
  providers: [ReviewManagementService],
  controllers: [ReviewManagementController]
})
export class ReviewManagementModule {}
