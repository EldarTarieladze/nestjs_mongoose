import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const bankAddress = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});
export const repetitorSchema = new Schema(
  {
    idNumber: {
      type: Number,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isMailVerified: {
      type: Boolean,
      default: false,
      index: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    image: {
      type: String,
      default: '/uploads/default/300x300.png',
    },
    password: {
      type: String,
      required: true,
    },
    CV: {
      type: String,
      default: '/uploads/default/defaultPDF.pdf',
    },
    about: {
      type: String,
      default: null,
    },
    rating: {
      type: Number,
      default: 0,
    },
    role: {
      type: String,
      required: true,
    },
    bankAddress: [bankAddress],
    address: {
      type: String,
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'courses',
      },
    ],
  },
  {
    timestamps: true,
  },
);
// repetitorSchema.index({name: "test"},)

repetitorSchema.index(
  { createdAt: 1 },
  {
    expireAfterSeconds: 15,
    partialFilterExpression: { isMailVerified: false },
  },
);

export interface Tutor extends mongoose.Document {
  idNumber: number;
  isVerified: boolean;
  isMailVerified: boolean;
  firstName: string;
  lastName: string;
  phone: string;
  mail: string;
  birthDate: Date;
  image: string;
  password: string;
  CV: string;
  about: string;
  rating: number;
  role: string;
  address: string;
  courses: string;
}
