import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const studentSchema = new Schema({
  idNumber: {
    type: Number,
    required: true,
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
  role: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    default: '',
  },
  address: {
    type: String,
  },
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: 'courses',
    },
  ],
});

export interface Student extends mongoose.Document {
  idNumber: number;
  firstName: string;
  lastName: string;
  phone: string;
  mail: string;
  birthDate: Date;
  image: string;
  password: string;
  about: string;
  rating: number;
  role: string;
  address: string;
  courses: any;
}
