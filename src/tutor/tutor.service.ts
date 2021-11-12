import { Injectable, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request, Response } from 'express';
import { Model } from 'mongoose';
import { Tutor } from '../model/tutor.model';
@Injectable()
export class TutorService {
  constructor(
    @InjectModel('repetitors') private readonly tutorModel: Model<Tutor>,
  ) {}
  getTutor = async (tutorID: string) => {
    console.log(tutorID);
    const tutor = await this.tutorModel.findById(tutorID);
    if (tutor) {
      return { success: true, tutor: tutor };
    } else {
      return { success: false, msg: 'notFound' };
    }
  };
  addTutor() {
    const tutorAdd = new this.tutorModel({});
    tutorAdd.save().then((err) => {
      if (err) {
        return err;
      }
      return 'kargia';
    });
  }
}
