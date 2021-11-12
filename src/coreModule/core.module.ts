import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { access_token } from 'config/env.json';
@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: access_token,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  exports: [JwtModule],
})
export class CoreModule {}
