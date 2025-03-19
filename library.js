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
  container.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    // Clear the container before displaying the updated list
    let newCard = document.createElement("div");
    newCard.classList.add("card");

    // Loop through the books in myLibrary and create cards
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.textContent = "Delete";

    // Create the "Toggle Read" button
    let toggleReadButton = document.createElement("button");
    toggleReadButton.classList.add("toggleReadButton");
    toggleReadButton.textContent = myLibrary[i].read ? "Mark as Unread" : "Mark as Read";

    newCard.innerHTML = `
    <h3>${myLibrary[i].title}</h3>
      <p><b>Author</b>: ${myLibrary[i].author}</p>
      <p><b>Pages</b>: ${myLibrary[i].pages}</p>
      <p><b>Read</b>: ${myLibrary[i].read ? "Yes" : "No"}</p>
    `;

    // Append the new card and buttons to the container
    container.appendChild(newCard);
    newCard.appendChild(deleteButton);
    newCard.appendChild(toggleReadButton);

    deleteButton.addEventListener("click", function() {
      myLibrary.splice(i, 1);
      container.removeChild(newCard);
      displayBooks();
    });

    toggleReadButton.addEventListener("click", function() {
      // Toggle the read status of the book
      myLibrary[i].read = !myLibrary[i].read;

      // Update the "Read" text in the card
      newCard.querySelector("p:nth-child(4)").innerHTML = `<b>Read:</b> ${myLibrary[i].read ? "Yes" : "No"}`;

      // Update the "Toggle Read" button text
      toggleReadButton.textContent = myLibrary[i].read ? "Mark as Unread" : "Mark as Read";
    });
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
