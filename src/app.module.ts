import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports:
    [
      TasksModule,
      MongooseModule.forRoot('mongodb+srv://LuisDB:WQoltm2Sy1VXWvza@cluster0.drqtutw.mongodb.net/?retryWrites=true&w=majority')
    ],
})
export class AppModule { }
