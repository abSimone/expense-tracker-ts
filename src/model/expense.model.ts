export interface Expense {
  title: string;
  amount: number;
  category: number;
  date: string;
}

export enum Category {
  "LEISURE",
  "WORK",
  "FOOD",
  "TRAVEL",
}

export const expenses: Expense[] = [
  {
    title: "Grocery",
    amount: 27.3,
    date: "2024-04-12",
    category: Category.FOOD,
  },
  {
    title: "Cinema with friends",
    amount: 20.7,
    date: "2024-05-12",
    category: Category.LEISURE,
  },
  {
    title: "Flight to Milan",
    amount: 80,
    date: "2024-06-10",
    category: Category.TRAVEL,
  },
];
