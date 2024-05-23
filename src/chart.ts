import { ChartItem, Chart } from "chart.js";
import ChartHelper from "./helper";
import { Category } from "./model/expense.model";

function loadChart(): void {
  const context = document.getElementById("chart");

  const data = [
    {
      category: Category.FOOD,
      amount: ChartHelper.calcAmount(Category.FOOD),
    },
    {
      category: Category.LEISURE,
      amount: ChartHelper.calcAmount(Category.LEISURE),
    },
    {
      category: Category.TRAVEL,
      amount: ChartHelper.calcAmount(Category.TRAVEL),
    },
    {
      category: Category.WORK,
      amount: ChartHelper.calcAmount(Category.WORK),
    },
  ];

  new Chart(context as ChartItem, {
    type: "bar",
    options: {
      plugins: {
        legend: { display: false },
      },
    },
    data: {
      labels: data.map((row) => row.category),
      datasets: [
        {
          data: data.map((row) => row.amount),
        },
      ],
    },
  });
}
