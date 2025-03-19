const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...

  if (typeof title !== "string") {
    throw new TypeError("title must be a string.");
  }
  if (typeof author !== "string") {
      throw new TypeError("author must be a string.");
  }
  if (typeof pages !== "number" || !Number.isInteger(pages) || pages < 1) {
      throw new TypeError("pages must be a positive integer.");
  }
  if (typeof read !== "boolean") {
      throw new TypeError("read must be a boolean.");
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  // take params, create a book then store it in the array

  if (!(book instanceof Book)) {
    throw new TypeError("Attempted to add an invalid book to the library.");
  }
  myLibrary.push(book);
}

let dune = new Book("Dune", "Frank Herbert", 896, true);
addBookToLibrary(dune);

let dune2 = new Book("Dune Messiah", "Frank Herbert", 288, true);
addBookToLibrary(dune2);

let container = document.querySelector(".container");
let addBookBtn = document.querySelector("#addBookBtn");

function displayBooks () {
  for (let i = 0; i < myLibrary.length; i++) {
    let newCard = document.createElement("div");
    newCard.classList.add("card");

    let deleteButton = document.createElement("div");
    deleteButton.classList.add("deleteButton");
    deleteButton.textContent = "Delete";

    newCard.innerHTML = `
    <h3>${myLibrary[i].title}</h3>
      <p><b>Author</b>: ${myLibrary[i].author}</p>
      <p><b>Pages</b>: ${myLibrary[i].pages}</p>
      <p><b>Read</b>: ${myLibrary[i].read ? "Yes" : "No"}</p>
    `;

    container.appendChild(newCard);
    newCard.appendChild(deleteButton);
  }
}

addBookBtn.addEventListener("click", function(event) {
  event.preventDefault();

  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;

  let newBook = new Book(title, author, parseInt(pages), read);
  addBookToLibrary(newBook);

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  displayBooks();
})

displayBooks();
