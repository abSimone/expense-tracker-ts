import "bootstrap/dist/css/bootstrap.min.css";
// import { Modal } from "bootstrap";
import ChartHelper from "./helper";
import { Category, Expense, expenses } from "./model/expense.model";
import {
  Chart,
  ChartItem,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

const form = document.querySelector("form")!;
form.addEventListener("submit", onSubmit);

function main(): void {
  Chart.register(BarController, LinearScale, CategoryScale, BarElement);
  loadChart();
  ChartHelper.generateOptions(Category);
}

function onSubmit(e: Event) {
  let data = new FormData(form);
  let expense: Expense = {
    title: data.get("title")!.toString(),
    amount: Number.parseInt(data.get("amount")!.toString()),
    date: "",
    category: +data.get("category")!.toString(),
  };
  expenses.push(expense);
  ChartHelper.addExpense(expense);
  form.reset();
}

const showFormButton = document.getElementById("showform")!;
const dialog = document.querySelector("dialog")!;

showFormButton.addEventListener("click", () => {
  dialog.showModal();
});

function loadChart(): void {
  const context = document.getElementById("chart");

  const data = [
    {
      category: "LEISURE",
      amount: ChartHelper.calcAmount(Category.LEISURE),
    },
    {
      category: "WORK",
      amount: ChartHelper.calcAmount(Category.WORK),
    },
    {
      category: "FOOD",
      amount: ChartHelper.calcAmount(Category.FOOD),
    },
    {
      category: "TRAVEL",
      amount: ChartHelper.calcAmount(Category.TRAVEL),
    },
  ];

  ChartHelper.myChart = new Chart(context as ChartItem, {
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
          backgroundColor: ["#ff880088", "#00ff4488", "#0066ff88", "#aa111188"],
          data: data.map((row) => row.amount),
        },
      ],
    },
  });
}

main();

// // Get the button element
// const openModalBtn = document.getElementById("openModalBtn");

// // Get the modal element
// const modalElement = document.getElementById("exampleModal");

// // Ensure both elements are present before proceeding
// if (openModalBtn && modalElement) {
//   // Create a Bootstrap modal instance
//   const exampleModal = new Modal(modalElement);

//   // Add an event listener to the button to show the modal when clicked
//   openModalBtn.addEventListener("click", () => {
//     exampleModal.show();
//   });
// }

// // ---------------------------------- HTML DIALOG ----------------------------------

// const dialog = document.querySelector("dialog") as HTMLDialogElement;
// const showButton = document.querySelector(
//   "[name='simple-dialog']"
// ) as HTMLButtonElement;
// const closeButton = document.querySelector(
//   "dialog button"
// ) as HTMLButtonElement;

// // "Show the dialog" button opens the dialog modally
// showButton.addEventListener("click", () => {
//   dialog.showModal();
// });

// // "Close" button closes the dialog
// closeButton.addEventListener("click", () => {
//   dialog.close();
// });
