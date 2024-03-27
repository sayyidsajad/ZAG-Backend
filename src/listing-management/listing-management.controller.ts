import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Role } from 'src/roles/enums/role.enum';
import { Roles } from 'src/roles/roles.decorator';
import { ListingManagementService } from './listing-management.service';
class ListingDto {
  listingName: string;
  businessPhone: string;
  city: string;
  address: string;
  images: string[];
}
class UpdateListingDto {
  listingName?: string;
  businessPhone?: string;
  city?: string;
  address?: string;
  images?: string[];
}
@Controller('listing-management')
export class ListingManagementController {
  constructor(private listingManagement: ListingManagementService) {}

  @Get('viewLists')
  viewLists() {
    return this.listingManagement.viewLists();
  }

  @Roles(Role.BusinessOwner, Role.Admin)
  @Post('createLists')
  createLists(@Body() listingDto: ListingDto) {
    return this.listingManagement.createLists(listingDto);
  }

  @Roles(Role.BusinessOwner, Role.Admin)
  @Put('updateLists')
  updateLists(@Body() updatingDto: UpdateListingDto, @Query('id') id: number) {
    return this.listingManagement.updateLists(updatingDto, id);
  }

  @Roles(Role.Admin)
  @Delete('deleteLists')
  deleteLists(@Query('id') id: string) {
    return this.listingManagement.deleteLists(id);
  }
}
