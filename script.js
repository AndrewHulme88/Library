const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayLibrary();
}

function displayLibrary() {
  const libraryDiv = document.getElementById("library");
  libraryDiv.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    const bookInfo = document.createElement("p");
    bookInfo.textContent = `"${book.title}" by ${book.author}, ${book.pages} pages, ${book.read ? 'read' : 'not read yet'}`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      displayLibrary();
    });

    bookDiv.appendChild(bookInfo);
    bookDiv.appendChild(removeButton);
    libraryDiv.appendChild(bookDiv);
  });
}

document.getElementById("bookForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  const newBook = new Book(title, author, pages, read);
  addBookToLibrary();

  document.getElementById("bookForm").reset();
});
