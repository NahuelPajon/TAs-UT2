function getSum(nums) {
  let sum = nums.reduce((acc, num) => acc + num, 0);
  const paraResult = document.createElement("p");
  paraResult.textContent = `Sum of numbers ${nums} = ${sum}`;
  document.body.appendChild(paraResult);
  console.log(paraResult);
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getSumAction() {
  getSum(nums);
}

const button = document.querySelector("button");

button.addEventListener("click", getSumAction);
