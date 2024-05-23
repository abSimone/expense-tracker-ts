import { Chart, ChartDataset } from "chart.js";
import { Expense, Category, expenses } from "./model/expense.model";

export default class ChartHelper {
  static myChart: Chart<"bar">;
  static calcAmount(category: Category): number {
    return expenses
      .filter((expense) => expense.category == category)
      .map((expense: Expense) => expense.amount)
      .reduce((a: number, b: number) => a + b, 0);
  }

  //  Metodo con cui generiamo le options della select a partire dall'enum Category
  static generateOptions(enumObject: any) {
    let select: HTMLSelectElement = document.querySelector("select")!;
    let options: string = "";
    console.log(enumObject);

    Object.keys(enumObject).forEach((k) => {
      if (Number.isNaN(+k)) {
        options += `<option value="${enumObject[k]}">${k}</option>`;
      }
    });

    select.insertAdjacentHTML("beforeend", options);
  }

  static addExpense(expense: Expense) {
    this.myChart.data.datasets.forEach((dataset) => {
      (<number>dataset.data[expense.category]) += expense.amount;
      console.log(dataset.data[expense.category]);
    });
    this.myChart.update();
  }

  static removeExpense(expense: Expense) {
    this.myChart.data.datasets.forEach((dataset) => {
      (<number>dataset.data[expense.category]) -= expense.amount;
    });
    this.myChart.update();
  }
}
