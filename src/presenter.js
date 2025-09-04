import { sumar, multiplicar } from "./sumador.js";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const btnSumar = document.querySelector("#sumar-button");
const btnMultiplicar = document.querySelector("#multiplicar-button");

let operacion = "sumar"; // por defecto

btnSumar.addEventListener("click", () => {
  operacion = "sumar";
});

btnMultiplicar.addEventListener("click", () => {
  operacion = "multiplicar";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  let resultado;
  if (operacion === "sumar") {
    resultado = sumar(firstNumber, secondNumber);
  } else {
    resultado = multiplicar(firstNumber, secondNumber);
  }

  div.innerHTML = `<p>${resultado}</p>`;
});
