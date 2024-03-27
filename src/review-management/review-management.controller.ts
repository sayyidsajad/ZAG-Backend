import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { ReviewManagementService } from './review-management.service';
import { Roles } from 'src/roles/roles.decorator';
import { Role } from 'src/roles/enums/role.enum';

@Controller('review-management')
export class ReviewManagementController {
    constructor(private reviewManagement: ReviewManagementService) {}

    @Get('viewReviews')
    viewReviews() {
      return this.reviewManagement.viewReviews();
    }
  
    @Roles(Role.User, Role.Admin)
    @Post('createReviews')
    createReviews(@Body() listingDto: any) {
      return this.reviewManagement.createReviews(listingDto);
    }
  
    @Put('updateReviews')
    updateReviews(@Body() updatingDto: any, @Query('id') id: number) {
      return this.reviewManagement.updateReviews(updatingDto, id);
    }
  
    @Roles(Role.User,Role.Admin)
    @Delete('deleteReviews')
    deleteLists(@Query('id') id: string) {
      return this.reviewManagement.deleteReviews(id);
    }
}
