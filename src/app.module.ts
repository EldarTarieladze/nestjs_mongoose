import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import env from './config/env.json';
import { TutorModule } from './tutor/tutor.module';
import { AuthModule } from 'auth/auth.module';
import { AuthMiddleware } from 'middleware/auth.middleware';
import { JwtModule } from '@nestjs/jwt';
import { access_token } from 'config/env.json';
import { CoreModule } from 'coreModule/core.module';
@Module({
  imports: [
    TutorModule,
    AuthModule,
    CoreModule,
    MongooseModule.forRoot(env.mongoURL),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('tutor');
  }
}
