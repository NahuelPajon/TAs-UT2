function createPrompt() {
  let lista = [];
  lista = prompt("giveme elements separated by comma").split(",");
  const para = prompt("what do you want to remove?");
  removeFromArray(para, lista);
}

function removeFromArray(para, lista) {
  const paraResult = document.createElement("p");
  paraResult.textContent = lista.filter((element) => element !== para);
  document.body.appendChild(paraResult);
  console.log(paraResult);
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createPrompt);
}
