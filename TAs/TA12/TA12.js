function generatePassword(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  const paraResult = document.createElement("p");
  paraResult.textContent = `password: ${password}`;
  document.body.appendChild(paraResult);
  console.log(paraResult);
}

function generatePrompt() {
  let length = 0;
  length = parseInt(prompt("Enter the length of the password:"));
  while (length < 8) {
    alert("Password length must be at least 8 characters.");
    length = parseInt(prompt("Enter the length of the password:"));
  }
  generatePassword(length);
}

const button = document.querySelector("button");

button.addEventListener("click", generatePrompt);
