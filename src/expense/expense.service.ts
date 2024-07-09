import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ExpenseService {
  async findAll() {
    return prisma.expense.findMany();
  }

  async create(data) {
    return prisma.expense.create({ data });
  }
}
