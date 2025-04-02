function duplicates(nums) {
  const count = nums.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  const duplicateCount = Object.values(count).filter((val) => val > 1).length;

  const paraResult = document.createElement("p");
  paraResult.textContent = `Duplicated numbers: ${duplicateCount} , ${JSON.stringify(count)}`;
  document.body.appendChild(paraResult);
  console.log(paraResult);
}

let nums = [1, 2, 2, 3, 4, 4, 4, 5, 9];

function duplicatesAction() {
  duplicates(nums);
}

const button = document.querySelector("button");

button.addEventListener("click", duplicatesAction);
