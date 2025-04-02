function valideteName() {
  const name = document.getElementById("nameInput").value;
  const p = document.getElementById("errorName");

  if (name.length === 0) {
    p.textContent = "El nombre no puede ser vacío";
    p.style.color = "red";
  } else {
    p.textContent = "";
    return true;
  }
}

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const email = document.getElementById("emailInput").value;
  const p = document.getElementById("errorEmail");

  if (!emailRegex.test(email)) {
    p.textContent = "El email no es válido";
    p.style.color = "red";
  } else {
    p.textContent = "";
    return true;
  }
}

function validatePassword() {
  const password = document.getElementById("passwordInput").value;
  const p = document.getElementById("errorPassword");

  if (password.length <= 8) {
    p.textContent = "La contraseña debe tener al menos 8 caracteres";
    p.style.color = "red";
  } else {
    p.textContent = "";
    return true;
  }
}

const buttonSubmit = document.querySelector("#buttonSubmit");

buttonSubmit.addEventListener("click", function () {
  validateEmail();
  valideteName();
  validatePassword();
  if (valideteName() && validateEmail() && validatePassword()) {
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
    alert("Formulario enviado correctamente");
  }
});
