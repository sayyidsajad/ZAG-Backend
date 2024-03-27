import { Body, Controller, Delete, Get, Post, Put, Query, Res } from '@nestjs/common';
import { ReviewManagementService } from './review-management.service';
import { Roles } from 'src/roles/roles.decorator';
import { Role } from 'src/roles/enums/role.enum';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('review-management')
@Controller('review-management')
export class ReviewManagementController {
    constructor(private reviewManagement: ReviewManagementService) {}

    @Get('viewReviews')
    viewReviews(@Res() res: Response) {
      return this.reviewManagement.viewReviews(res);
    }
  
    @Roles(Role.User, Role.Admin)
    @Post('createReviews')
    createReviews(@Body() createReviewDto: any, @Res() res: Response) {
      return this.reviewManagement.createReviews(createReviewDto, res);
    }
  
    @Put('updateReviews')
    updateReviews(@Body() updatingDto: any, @Query('id') id: number, @Res() res: Response) {
      return this.reviewManagement.updateReviews(updatingDto, id, res);
    }
  
    @Roles(Role.User,Role.Admin)
    @Delete('deleteReviews')
    deleteLists(@Query('id') id: string, @Res() res: Response) {
      return this.reviewManagement.deleteReviews(id, res);
    }
}
