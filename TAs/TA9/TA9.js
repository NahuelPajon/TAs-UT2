function getOdds(nums) {
  let odds = [];
  odds = nums.filter((num) => num % 2 !== 0);
  const paraResult = document.createElement("p");
  paraResult.textContent = `Odd numbers: ${odds}`;
  document.body.appendChild(paraResult);
  console.log(paraResult);
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getOddsAction() {
  getOdds(nums);
}
const button = document.querySelector("button");

button.addEventListener("click", getOddsAction);
