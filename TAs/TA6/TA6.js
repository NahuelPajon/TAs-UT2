function convertToFahrenheit(temp) {
  const paraResult = document.createElement("p");
  let tempResult = temp * 1.8 + 32;
  paraResult.textContent = `${temp}°C = ${tempResult.toFixed(1)}°F.`;
  document.body.appendChild(paraResult);
  console.log(paraResult);
}

function convertToCelsius(temp) {
  const paraResult = document.createElement("p");
  let tempResult = (temp - 32) * (5 / 9);
  paraResult.textContent = `${temp}°F = ${tempResult.toFixed(1)}°C.`;
  document.body.appendChild(paraResult);
  console.log(paraResult);
}

function createPromptCelsius() {
  const temp = prompt("Enter a temperature in Fahrenheit:");
  convertToCelsius(temp);
}

function createPromptFahrenheit() {
  const temp = prompt("Enter a temperature in Celsius:");
  convertToFahrenheit(temp);
}

const buttonCelsius = document.querySelector("#celsiusButton");

const buttonFahrenheit = document.querySelector("#fahrenheitButton");

buttonCelsius.addEventListener("click", createPromptCelsius);

buttonFahrenheit.addEventListener("click", createPromptFahrenheit);
