function createPrompt() {
  const para = prompt("what do you want to see in reverse?");
  reverseString(para);
}

function reverseString(para) {
  const paraResult = document.createElement("p");
  paraResult.textContent = para.split("").reverse().join("");
  document.body.appendChild(paraResult);
  console.log(paraResult);
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createPrompt);
}
