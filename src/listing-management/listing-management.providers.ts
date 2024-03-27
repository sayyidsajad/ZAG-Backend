import { Connection } from 'mongoose';
import { ListingSchema } from 'src/schemas/listing-management.schema';

export const listingProviders = [
  {
    provide: 'LISTING_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Listing', ListingSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
