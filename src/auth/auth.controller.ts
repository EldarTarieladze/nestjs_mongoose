import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Tutor } from './../model/tutor.model';
import { Student } from 'model/student.model';

export interface TAuth {
  mail: string;
  password: string;
}
interface TAuthTutorRes {
  success: boolean;
  msg: string;
  access_token?: string;
  user?: Tutor;
}
interface TAuthStudentRes {
  success: boolean;
  msg: string;
  access_token?: string;
  user?: Student;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('tutor')
  authTutor(@Body() userAuth: TAuth): Promise<TAuthTutorRes> {
    return this.authService.authTutor(userAuth);
  }
  @Post('student')
  authStudent(@Body() userAuth: TAuth): Promise<TAuthStudentRes> {
    return this.authService.authStudent(userAuth);
  }
}
