import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewManagementService {
    async viewReviews() {
      return [];
    }
    async createReviews(listingDto: any) {
      
      return 'Success';
    }
    async updateReviews(updatingDto: any, id: number) {
        return
    }
    async deleteReviews(id: string) {
      return
    }
}
