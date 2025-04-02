function createPrompt() {
  const year = prompt("Enter a year:");
  leapYears(year);
}

function leapYears(year) {
  const paraResult = document.createElement("p");
  if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
    paraResult.textContent = `The year ${year} is a leap year.`;
  } else {
    paraResult.textContent = `The year ${year} is not a leap year.`;
  }
  document.body.appendChild(paraResult);
  console.log(paraResult);
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createPrompt);
}
