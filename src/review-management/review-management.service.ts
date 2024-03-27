import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Response } from 'express';
import { Model } from 'mongoose';

@Injectable()
export class ReviewManagementService {
  constructor(
    @Inject('LISTING_MODEL')
    private _listingModel: Model<any>,
  ) {}
  async viewReviews(res: Response) {
    try {
      const findLists = await this._listingModel.find();
      return res.status(HttpStatus.OK).json({
        data: findLists.some((item) => item.reviews.length === 0)
          ? 'No Reviews Yet'
          : findLists.forEach((item) => item.reviews),
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
  async createReviews(listingDto: any, res: Response) {
    try {
      return 'Success';
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
  async updateReviews(updatingDto: any, id: number, res: Response) {
    try {
      return;
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
  async deleteReviews(id: string, res: Response) {
    try {
      return;
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
