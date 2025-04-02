function enterElement(element) {
  const newLi = document.createElement("li");
  newLi.textContent = element;
  document.getElementById("myList").appendChild(newLi);
  entireList.push(element);
}

function deleteElement () {
    const lastElement = entireList.pop();
    const listItems = document.querySelectorAll("#myList li");
    const lastLi = listItems[listItems.length - 1];
    if (lastLi) {
        lastLi.remove();
    }
}

let entireList = [];

function generatePrompt() {
  let element = prompt("Write something ...");
  enterElement(element);
}

const buttonAdd = document.querySelector("#buttonAdd");

buttonAdd.addEventListener("click", generatePrompt);

const buttonDelete = document.querySelector("#buttonDelete");

buttonDelete.addEventListener("click", deleteElement);


