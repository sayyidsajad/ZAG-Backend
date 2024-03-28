import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema( // Not necessary, due to no signup (just for a reference schema is made).
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      type: [
        {
          type: String,
          enum: ['admin', 'user', 'guest'], // Enum values
        },
      ],
      default: ['user'], // Default value
    },
  },
  { timestamps: true },
);
