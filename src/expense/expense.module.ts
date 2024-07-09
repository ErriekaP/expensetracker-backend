import { Module } from '@nestjs/common';
import { ExpensesController } from './expense.controller';
import { ExpensesService } from './expense.service';
import { PrismaService } from 'prisma/prisma.service';
import { SupabaseService } from '../supabase/supbabase.service';

@Module({
  imports: [],
  controllers: [ExpensesController],
  providers: [ExpensesService, PrismaService, SupabaseService],
})
export class ExpenseModule {}
