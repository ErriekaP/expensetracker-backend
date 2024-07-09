import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Expense } from '@prisma/client';
import { ExpensesDTO } from './expense.dto';

@Injectable()
export class ExpensesService {
  constructor(private prisma: PrismaService) {}

  async getExpenses(): Promise<Expense[]> {
    return this.prisma.expense.findMany();
  }

  async getTotalExpenses(): Promise<number> {
    const expenses = await this.prisma.expense.findMany();
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  }

  async createExpense(data: ExpensesDTO) {
    return this.prisma.expense.create({ data });
  }
}
