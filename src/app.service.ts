import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public arr: any[];
  public idCount: number;
  constructor() {
    this.arr = [];
    this.idCount = 0;
  }
}
