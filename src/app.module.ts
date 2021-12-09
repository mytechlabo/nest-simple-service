import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { TicketsModule } from './tickets/tickets.module';
import { ChatsModule } from './chats/chats.module';

@Module({
  imports: [UsersModule, PostsModule, CommentsModule, TicketsModule, ChatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
