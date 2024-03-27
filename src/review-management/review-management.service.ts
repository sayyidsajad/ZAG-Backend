import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class ReviewManagementService {
  async viewReviews(res: Response) {
    try {
      return [];
    } catch (error) {}
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
