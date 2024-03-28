import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UpdateListingDto } from './dto/update-list.dto';
import { ListingDto } from './dto/create-list.dto';
import { Response } from 'express';
import { Model } from 'mongoose';

@Injectable()
export class ListingManagementService {
  constructor(
    @Inject('LISTING_MODEL')
    private _listingModel: Model<any>,
  ) {}
  async viewLists(res: Response) {
    try {
      const findLists = await this._listingModel.find();
      return res.status(HttpStatus.OK).json({
        data: findLists.length > 0 ? findLists : 'No Lists Available',
      });
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
      const createList = new this._listingModel({
        ...listingDto,
      });
      await createList.save();
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
      await this._listingModel.updateOne(
        { _id: id },
        { $set: { ...updatingDto } },
      );
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
      await this._listingModel.deleteOne({ _id: id });
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
