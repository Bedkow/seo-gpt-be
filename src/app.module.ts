import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { QueriesModule } from './queries/queries.module';

@Module({
  imports: [UsersModule, QueriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
