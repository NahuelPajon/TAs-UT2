function findTheOldest(people) {
  let peopleAge = people.map(
    (person) => person.yearOfDeath - person.yearOfBirth
  );
  const oldestPerson = peopleAge.reduce(
    (max, person) => (person > max ? person : max),
    peopleAge[0]
  );
  console.log(oldestPerson);
  const paraResult = document.createElement("p");
  paraResult.textContent = `Oldest Person age: ${oldestPerson}`;
  document.body.appendChild(paraResult);
  console.log(paraResult);
}

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
  {
    name: "Albert",
    yearOfBirth: 1879,
    yearOfDeath: 1955,
  },
  {
    name: "Marie",
    yearOfBirth: 1867,
    yearOfDeath: 1934,
  },
];

function findTheOldestAction() {
  findTheOldest(people);
}

const button = document.querySelector("button");

button.addEventListener("click", findTheOldestAction);
