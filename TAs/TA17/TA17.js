function increment() {
  let spanValue = document.getElementById("myCount").textContent;
  let incremented = parseInt(spanValue) + 1;
  document.getElementById("myCount").textContent = incremented;
}

const buttonAdd = document.querySelector("#buttonAdd");

buttonAdd.addEventListener("click", increment);
