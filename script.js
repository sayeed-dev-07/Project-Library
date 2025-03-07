
const cardContainer = document.querySelector(".cards-container");
const titleData = document.querySelector("#titleData");
const authorData = document.querySelector("#authorData");
const pagesData = document.querySelector("#pagesData");
const statusData = document.querySelector("#book-read");
const addBookBtn = document.querySelector(".add-book");
const dialog = document.getElementById("dialog");
let form = document.querySelector("#form-submit");
let closeBtn = document.querySelector(".cancel-btn");

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

class Library {
  constructor(library) {
    this.myLibrary = [];
  }
  addBookToLibrary(book) {
    
    this.myLibrary.push(book);
    this.#displayBooks();
  }
  
  removeBook(index) {
    this.myLibrary.splice(index, 1);
    this.#displayBooks();
  }
  toggleReadStatus(index) {
    this.myLibrary[index].status = !this.myLibrary[index].status;
    this.#displayBooks();
  }

  #displayBooks() {
    cardContainer.innerHTML = "";

    this.myLibrary.forEach((book, index) => {
      let div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `
        <div class="title card-info">
          <p>Name:</p>
          <span class="title-span">${book.title}</span>
        </div>
        <div class="author card-info">
          <p>Author:</p>
          <span class="author-span">${book.author}</span>
        </div>
        <div class="pages card-info">
          <p>Pages:</p>
          <span class="pages-span">${book.pages}</span>
        </div>
        <button onclick="library.toggleReadStatus(${index})" class=" ${
        book.status ? "yes" : "no"
      }">
          ${book.status ? "Read" : "Not Read"}
        </button>
        <button onclick="library.removeBook(${index})" class="delete">Remove</button>
      `;
      cardContainer.appendChild(div);
    });
  }
}
let library = new Library(); 

// Function to validate pages in real-time
function validatePages() {
  pagesData.setCustomValidity("");

  if (pagesData.validity.rangeOverflow) {
    pagesData.setCustomValidity("Pages can't exceed 1000");
  } else if (pagesData.validity.rangeUnderflow) {
    pagesData.setCustomValidity("The minimum number of pages is 1");
  }
  pagesData.reportValidity();
}

// Function to validate title in real-time
function validateTitle() {
  titleData.setCustomValidity("");
  if (titleData.value.trim() === "") {
    titleData.setCustomValidity("Book Title cannot be empty.");
  }
  titleData.reportValidity();
}

// Function to validate author in real-time
function validateAuthor() {
  authorData.setCustomValidity("");
  if (authorData.value.trim() === "") {
    authorData.setCustomValidity("Author Name cannot be empty.");
  }
  authorData.reportValidity();
}

// Add event listeners to trigger validation while typing
titleData.addEventListener("input", validateTitle);
authorData.addEventListener("input", validateAuthor);
pagesData.addEventListener("input", validatePages);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Run validations again before submission
  validateTitle();
  validateAuthor();
  validatePages();

  let bookTitle = titleData.value.trim();
  let bookAuthor = authorData.value.trim();
  let bookPages = parseInt(pagesData.value);
  let bookStatus = statusData.checked;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  if (library.myLibrary.some((book) => book.title === bookTitle)) {
    alert("The book already exists in the library");
    return;
  }

  let newBook = new Book(bookTitle, bookAuthor, bookPages, bookStatus);
  library.addBookToLibrary(newBook);

  form.reset();
  dialog.close();
});


closeBtn.addEventListener("click", () => {
  dialog.close();
});

addBookBtn.addEventListener("click", () => {
  dialog.showModal();
});