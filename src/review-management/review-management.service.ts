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
    // View of all the reviews only without the whole data.
    try {
      const findLists = await this._listingModel.find();
      return res.status(HttpStatus.OK).json({
        data: findLists.some((item) => item.reviews.length === 0)
          ? 'No Reviews Yet'
          : findLists.map((item) => item.reviews),
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
  async createReviews(review: string, res: Response, id: number, req: Request) {
    // Creating Reviews for existing list of businessess
    try {
      await this._listingModel.findByIdAndUpdate(
        { _id: id },
        {
          $push: {
            reviews: { user: req['user']['sub'], review: review },
          },
        },
        { new: true },
      );
      return res
        .status(HttpStatus.CREATED)
        .json({ message: 'Reviewed Success' });
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
  async updateReviews(updatedReview: string, id: number, res: Response) {
    try {
      await this._listingModel.findOneAndUpdate(
        { 'reviews._id': id }, // Assuming 'id' is the id of the review want to update
        { $set: { 'reviews.$.review': updatedReview } },
        { new: true }, // This option returns the modified document rather than the original
      );
      return res
        .status(HttpStatus.CREATED)
        .json({ message: 'Review Updated Successfully' });
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
  async responseReview(reply: string, id: number, res: Response, req: Request) {
    // Matching with review Id and Updating.
    try {
      await this._listingModel.findOneAndUpdate(
        { 'reviews._id': id },
        {
          $push: {
            'reviews.$.responses': {
              repliedUser: req['user']['sub'],
              reply: reply,
            },
          },
        },
        { new: true },
      );
      return res
        .status(HttpStatus.CREATED)
        .json({ message: 'Responded Successfully' });
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
    // Matching with the ID and pulling it from the Array.
    try {
      await this._listingModel.updateOne(
        { 'reviews._id': id },
        { $pull: { reviews: { _id: id } } },
      );
      return res
        .status(HttpStatus.CREATED)
        .json({ message: 'deleted Successfully' });
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
