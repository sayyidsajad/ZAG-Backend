import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ListingManagementModule } from './listing-management/listing-management.module';
import { ReviewManagementModule } from './review-management/review-management.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ListingManagementModule,
    ReviewManagementModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
