import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { PositionsModule } from './modules/positions/positions.module';
import { ApplicationsModule } from './modules/applications/applications.module';
import { MembersModule } from './modules/members/members.module';
import { AuthModule } from './modules/auth/auth.module';
import { PrsimaModule } from 'prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    ProjectsModule,
    PositionsModule,
    ApplicationsModule,
    MembersModule,
    AuthModule,
    PrsimaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
