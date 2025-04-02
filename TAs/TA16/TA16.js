function mostrar_ocultar() {
    const p = document.querySelector("#myText");
    if (p.style.display === "none") {
        p.style.display = "block";
    } else {
        p.style.display = "none";
    }
}

const buttonAction = document.querySelector("#buttonAction");

buttonAction.addEventListener("click", mostrar_ocultar);