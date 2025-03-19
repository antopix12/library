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

let dune2 = new Book("Dune Messiah", "Frank Herbet", 288, true);
addBookToLibrary(dune2);


function displayBooks () {
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
  }
}