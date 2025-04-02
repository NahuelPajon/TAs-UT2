const input = document.getElementById("input");
const originalBorder = input.style.border;

input.addEventListener("focus", () => {
  input.style.border = "10px solid darkblue";
});

input.addEventListener("blur", () => {
  input.style.border = originalBorder;
});
