import { Injectable } from '@nestjs/common';
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
@Injectable()
export class ListingManagementService {
  private arr: any[];
  private idCount: number;
  constructor() {
    this.arr = [];
    this.idCount = 0;
  }
  async viewLists() {
    return this.arr;
  }
  async createLists(listingDto: ListingDto) {
    this.arr.push({
      id: this.idCount++,
      ...listingDto,
    });
    return 'Success';
  }
  async updateLists(updatingDto: UpdateListingDto, id: number) {
    const find = this.arr.find((item) => item.id == id);
    if (find) {
      Object.keys(updatingDto).forEach((key) => {
        if (updatingDto[key] !== undefined) {
          find[key] = updatingDto[key];
        }
      });
    }
    return this.arr;
  }
  async deleteLists(id: string) {
    const find = this.arr.find((item) => item.id == id);
    if (find) {
      this.arr = this.arr.filter((item) => item.id != id);
    }
  }
}
