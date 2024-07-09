import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from 'prisma/prisma.service';
import { SupabaseService } from './supabase/supbabase.service';
import { ExpenseModule } from './expense/expense.module';

@Module({
  imports: [ExpenseModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, SupabaseService],
})
export class AppModule {}
