function createPrompt() {
  const cant = prompt("how many repetitions?");
  const para = prompt("what do you want to write?");
  repeatString(para, cant);
}

function repeatString(para, cant) {
  const paraResult = document.createElement("p");
  paraResult.textContent = (para + ' ').repeat(cant);
  document.body.appendChild(paraResult);
  console.log(paraResult);
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createPrompt);
}
