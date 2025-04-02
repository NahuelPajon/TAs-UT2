const people = [
  { name: "Carlos", age: 30 },
  { name: "Ana", age: 25 },
  { name: "Luis", age: 28 },
  { name: "Sofía", age: 22 },
  { name: "Javier", age: 35 },
  { name: "María", age: 27 },
  { name: "Pedro", age: 31 },
  { name: "Laura", age: 24 },
  { name: "Diego", age: 29 },
  { name: "Valeria", age: 26 },
  { name: "Andrés", age: 33 },
  { name: "Claudia", age: 21 },
  { name: "Fernando", age: 34 },
  { name: "Isabel", age: 23 },
  { name: "Ricardo", age: 32 },
  { name: "Gabriela", age: 30 },
  { name: "Hugo", age: 28 },
  { name: "Patricia", age: 25 },
  { name: "Raúl", age: 27 },
  { name: "Verónica", age: 22 },
  { name: "Eduardo", age: 29 },
  { name: "Natalia", age: 26 },
  { name: "Sergio", age: 31 },
  { name: "Mónica", age: 24 },
  { name: "Alberto", age: 35 },
];

const ul = document.getElementById("peopleList");

const searchInput = document.getElementById("searchInput");

function renderList(filteredPeople) {
  if (filteredPeople.length === 0) {
    people
      .map((person) => `<li>${person.name} - ${person.age} años</li>`)
      .join("");
  } else {
    ul.innerHTML = filteredPeople
      .map((person) => `<li>${person.name} - ${person.age} años</li>`)
      .join("");
  }
}

renderList(people);

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase();
  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(searchText)
  );

  renderList(filteredPeople);
});
