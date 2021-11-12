import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tutor } from 'model/tutor.model';
import { Student } from 'model/student.model';
import { Model } from 'mongoose';
import { TAuth } from './auth.controller';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel('repetitors') private readonly tutorModel: Model<Tutor>,
    @InjectModel('students') private readonly studentModel: Model<Student>,
  ) {}
  async authTutor(user: TAuth) {
    return this.tutorModel.findOne({ mail: user.mail }).then(async (result) => {
      if (result) {
        const verifiedPass = await bcrypt.compare(
          user.password,
          result.password,
        );
        if (verifiedPass) {
          const access_token = this.jwtService.sign({
            _id: result._id,
            role: result.role,
          });
          console.log(access_token);
          return {
            success: true,
            access_token,
            msg: 'წარმატებით გაიარეთ ავტორიზაცია',
            user: result,
          };
        } else {
          return { success: false, msg: 'მომხმარებლის პაროლი არასწორია' };
        }
      } else {
        return { success: false, msg: 'მომხმარებელი ამ მეილით არ არსებობს' };
      }
    });
  }
  async authStudent(user: TAuth) {
    return this.studentModel
      .findOne({ mail: user.mail })
      .then(async (result) => {
        if (result) {
          const verifiedPass = await bcrypt.compare(
            user.password,
            result.password,
          );
          if (verifiedPass) {
            const access_token = this.jwtService.sign({
              _id: result._id,
              role: result.role,
            });
            console.log(access_token);
            return {
              success: true,
              access_token,
              msg: 'წარმატებით გაიარეთ ავტორიზაცია',
              user: result,
            };
          } else {
            return { success: false, msg: 'მომხმარებლის პაროლი არასწორია' };
          }
        } else {
          return { success: false, msg: 'მომხმარებელი ამ მეილით არ არსებობს' };
        }
      });
  }
}
