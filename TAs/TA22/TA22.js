let number1 = document.getElementById("number1");

let number2 = document.getElementById("number2");

number1.textContent = window.screen.width + " px";
number2.textContent = window.screen.height + " px";

window.addEventListener("resize", () => {
  number1.textContent = window.innerWidth + " px";
  number2.textContent = window.innerHeight + " px";
});
