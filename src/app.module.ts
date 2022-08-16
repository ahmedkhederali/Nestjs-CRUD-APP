// second step After Buliding Schema is forFeature any name + schema is name of schema
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserSchema } from './user.model';

console.log(process.env.name)

@Module({
  imports: [
    MongooseModule.forRoot("Put Your DB Linke Here To test"),
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
