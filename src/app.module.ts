import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { QueriesModule } from './queries/queries.module';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';

@Module({
  imports: [UsersModule, QueriesModule, MongooseModule.forRoot(process.env.MONGO_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
