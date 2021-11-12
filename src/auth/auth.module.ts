import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { repetitorSchema } from './../model/tutor.model';
import { studentSchema } from 'model/student.model';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'repetitors', schema: repetitorSchema },
      { name: 'students', schema: studentSchema },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
