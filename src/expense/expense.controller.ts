import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExpensesService } from './expense.service';
import { ExpensesDTO } from './expense.dto';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Get()
  getExpenses() {
    return this.expensesService.getExpenses();
  }
  @Get('/total')
  getTotalExpenses() {
    return this.expensesService.getTotalExpenses();
  }

  @Post()
  createExpense(@Body() data: ExpensesDTO) {
    return this.expensesService.createExpense(data);
  }
}
