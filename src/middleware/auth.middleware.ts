import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  use(req: Request, res: Response, next: NextFunction) {
    try {
      const token = JSON.parse(req.headers.authorization.split(' ')[1]);
      if (token) {
        const decodedData = this.jwtService.verify(token);
        res.locals.user = decodedData;
        console.log(decodedData);
        next();
      }
    } catch (error) {
      res.json({ success: false, msg: 'ტოკენი ვერ მოიძებნა' });
      next();
    }
  }
}
