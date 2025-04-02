function enterElement(element) {
  const newLi = document.createElement("li");
  newLi.textContent = element;
  document.getElementById("myList").appendChild(newLi);
}

function generatePrompt() {
  let element = prompt("Write something ...");
  enterElement(element);
}

const button = document.querySelector("button");

button.addEventListener("click", generatePrompt);
