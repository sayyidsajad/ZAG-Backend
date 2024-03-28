import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ListingManagementModule } from './listing-management/listing-management.module';
import { ReviewManagementModule } from './review-management/review-management.module';
import { HttpExceptionFilter } from './exceptions/http-exception.filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ListingManagementModule,
    ReviewManagementModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
  exports: [AppService],
})
export class AppModule {}
