import { Module } from '@nestjs/common';
import { TutorController } from './../tutor/tutor.controller';
import { TutorService } from './../tutor/tutor.service';
import { MongooseModule } from '@nestjs/mongoose';
import { repetitorSchema } from '../model/tutor.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'repetitors', schema: repetitorSchema },
    ]),
  ],
  controllers: [TutorController],
  providers: [TutorService],
})
export class TutorModule {}
