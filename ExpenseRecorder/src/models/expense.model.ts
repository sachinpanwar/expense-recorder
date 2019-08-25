export interface Expense {
  Amount: number;
  PaidFor: string;
  PaidOn: Date | string;
  PaidTo: string;
  PaidBy: string;
}