import * as mongoose from 'mongoose';

export const ListingSchema = new mongoose.Schema(
  {
    listingName: { type: String, required: true },
    businessPhone: { type: Number, unique: true, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    images: [
      {
        type: String,
      },
    ],
    reviews: [
      {
        user: { type: mongoose.Schema.ObjectId, ref: 'Users' },
        review: { type: String },
        responses: [
          {
            repliedUser: { type: mongoose.Schema.ObjectId, ref: 'Users' },
            reply: { type: String },
          },
        ],
      },
    ],
  },
  { timestamps: true },
);
