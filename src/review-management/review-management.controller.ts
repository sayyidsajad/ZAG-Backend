import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
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
  createReviews(
    @Body('review') review: string,
    @Res() res: Response,
    @Query('id') id: number,
    @Req() req: Request,
  ) {
    return this.reviewManagement.createReviews(review, res, id, req);
  }

  @Put('updateReviews') // Anyone can update.
  updateReviews(
    @Body('review') review: string,
    @Query('id') id: number,
    @Res() res: Response,
  ) {
    return this.reviewManagement.updateReviews(review, id, res);
  }

  @Roles(Role.BusinessOwner) // Business Owners Response
  @Patch('responseReview')
  responseReview(
    @Body('reply') reply: string,
    @Query('id') id: number,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    return this.reviewManagement.responseReview(reply, id, res, req);
  }

  @Roles(Role.User, Role.Admin)
  @Delete('deleteReviews')
  deleteLists(@Query('id') id: string, @Res() res: Response) {
    return this.reviewManagement.deleteReviews(id, res);
  }
}
