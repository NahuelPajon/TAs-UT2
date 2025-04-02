const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
  {
    title: "1984",
    author: "George Orwell",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
  },
  {
    title: "Harry Potter and the Sorcerer’s Stone",
    author: "J.K. Rowling",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
  },
  {
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
  },
];

function getTheTitlesAction() {
  getTheTitles(books);
}

function getTheTitles(books) {
  let resultTitles = books.map((book) => book.title);
  const paraResult = document.createElement("p");
  paraResult.textContent = `Titles: ${resultTitles.join(", ")}`;
  document.body.appendChild(paraResult);
  console.log(resultTitles);
}

const button = document.querySelector("button");

button.addEventListener("click", getTheTitlesAction);
