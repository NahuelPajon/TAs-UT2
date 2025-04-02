const image = document.getElementById("drake");

image.addEventListener("mouseover", () => {
  image.src = "drake si.jpg";
});

image.addEventListener("mouseout", () => {
  image.src = "drake no.jpg";
});
