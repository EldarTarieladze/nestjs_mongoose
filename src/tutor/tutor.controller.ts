import { Controller, Get, Response, Request } from '@nestjs/common';
import { Tutor } from '../model/tutor.model';
import { TutorService } from './tutor.service';

interface TGetAllTutor {
  success: boolean;
  tutor?: Tutor;
  msg?: string;
}
@Controller('tutor')
export class TutorController {
  constructor(private readonly tutorService: TutorService) {}

  @Get('all')
  async getTutor(@Response() res): Promise<TGetAllTutor> {
    console.log(res.locals.user._id);
    const tutor = await this.tutorService.getTutor(res.locals.user._id);
    return res.json(tutor);
  }
}
