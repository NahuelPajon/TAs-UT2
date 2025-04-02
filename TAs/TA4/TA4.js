function createPrompt() {
  const num1 = prompt("first number");
  const num2 = prompt("second number");

  sumAll(num1, num2);
}

function sumAll(num1, num2) {
  const paraResult = document.createElement("p");
  let sum = 0;

  for (let i = Number(num1); i <= Number(num2); i++) {
    sum += i;
  }
  
  paraResult.textContent = `The sum of ${num1} till ${num2} is: ${sum}`;
  document.body.appendChild(paraResult);
  console.log(paraResult);
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createPrompt);
}
