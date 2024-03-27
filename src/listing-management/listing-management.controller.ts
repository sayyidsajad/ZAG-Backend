import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { Role } from 'src/roles/enums/role.enum';
import { Roles } from 'src/roles/roles.decorator';
import { ListingManagementService } from './listing-management.service';
import { ApiTags } from '@nestjs/swagger';
import { ListingDto } from './dto/create-list.dto';
import { UpdateListingDto } from './dto/update-list.dto';
import { Response } from 'express';

@ApiTags('listing-management')
@Controller('listing-management')
export class ListingManagementController {
  constructor(private listingManagement: ListingManagementService) {}

// Each route's name gives an idea of what that specific route is about (Maintained Readability).
@Get('viewLists')
  viewLists(@Res() res: Response) {
    return this.listingManagement.viewLists(res);
  }

  @Roles(Role.BusinessOwner, Role.Admin) // Roles, for maintaining accessibility.
  @Post('createLists')
  createLists(@Body() listingDto: ListingDto, @Res() res: Response) {
    return this.listingManagement.createLists(listingDto, res);
  }

  @Roles(Role.BusinessOwner, Role.Admin)
  @Put('updateLists')
  updateLists(
    @Body() updatingDto: UpdateListingDto,
    @Query('id') id: number,
    @Res() res: Response,
  ) {
    return this.listingManagement.updateLists(updatingDto, id, res);
  }

  @Roles(Role.Admin)
  @Delete('deleteLists')
  deleteLists(@Query('id') id: string, @Res() res: Response) {
    return this.listingManagement.deleteLists(id, res);
  }
}
