import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateListingDto } from './dto/update-list.dto';
import { ListingDto } from './dto/create-list.dto';
import { Response } from 'express';
import { AppService } from 'src/app.service';

@Injectable()
export class ListingManagementService {
  constructor(private appService: AppService) {}
  async viewLists(res: Response) {
    try {
      return res.status(HttpStatus.OK).json({ data: this.appService.arr });
    } catch (error) {
      if (error instanceof HttpException) {
        return res.status(error.getStatus()).json({
          message: error.message,
        });
      } else {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Internal Server Error',
        });
      }
    }
  }
  async createLists(listingDto: ListingDto, res: Response) {
    try {
      this.appService.arr.push({
        id: this.appService.idCount++,
        ...listingDto,
      });
      return res
        .status(HttpStatus.CREATED)
        .json({ message: 'Successfully Created' });
    } catch (error) {
      if (error instanceof HttpException) {
        return res.status(error.getStatus()).json({
          message: error.message,
        });
      } else {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Internal Server Error',
        });
      }
    }
  }
  async updateLists(updatingDto: UpdateListingDto, id: number, res: Response) {
    try {
      const find = this.appService.arr.find((item) => item.id == id);
      if (find) {
        Object.keys(updatingDto).forEach((key) => {
          if (updatingDto[key] !== undefined) {
            find[key] = updatingDto[key];
          }
        });
      }
      return res
        .status(HttpStatus.CREATED)
        .json({ message: 'Successfully Updated' });
    } catch (error) {
      if (error instanceof HttpException) {
        return res.status(error.getStatus()).json({
          message: error.message,
        });
      } else {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Internal Server Error',
        });
      }
    }
  }
  async deleteLists(id: string, res: Response) {
    try {
      const find = this.appService.arr.find((item) => item.id == id);
      if (find) {
        this.appService.arr = this.appService.arr.filter(
          (item) => item.id != id,
        );
      }
      return res
        .status(HttpStatus.CREATED)
        .json({ message: 'Successfully Deleted' });
    } catch (error) {
      if (error instanceof HttpException) {
        return res.status(error.getStatus()).json({
          message: error.message,
        });
      } else {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Internal Server Error',
        });
      }
    }
  }
}
