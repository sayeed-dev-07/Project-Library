// works with the dialog functionality

const addBookBtn = document.querySelector(".add-book");
const submitBtn = document.querySelector(".submit-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const dialog = document.querySelector("#dialog");

const cardContainer = document.querySelector(".cards-container");

const titleData = document.querySelector("#titleData");
const authorData = document.querySelector("#authorData");
const pagesData = document.querySelector("#pagesData");

addBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

const readOrNotBtn = document.createElement("button");
// creating functions here

const myLibrary = [];

function book(title, author, pages, readOrNot) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readOrNot = readOrNot;
}

function addBookToLibrary(title, author, pages, readOrNot) {
  myLibrary.push(new book(title, author, pages, readOrNot));
  for (let i = 0; i < myLibrary.length; i++) {
    titleSpan.innerText = myLibrary[i].title;
    spanAuthor.innerText = myLibrary[i].author;
    spanPages.innerText = myLibrary[i].pages;
    if (!myLibrary[i].readOrNot) {
      readOrNotBtn.classList.add("no");
      readOrNotBtn.innerText = "Not Read";
    } else {
      readOrNotBtn.classList.add("yes");
      readOrNotBtn.innerText = "Read";
    }
  }
}

const bookReadCheck = document.querySelector("#book-read");

// element creating
const titleInfo = document.createElement("div");
const titleSpan = document.createElement("span");
const pTitle = document.createElement("p");
const authorInfo = document.createElement("div");
const spanAuthor = document.createElement("span");
const pagesInfo = document.createElement("div");
const pAuthor = document.createElement("p");
const pPages = document.createElement("p");
const spanPages = document.createElement("span");
const deleteBtn = document.createElement("button");
const cards = document.createElement("div");


// class adding
cards.classList.add("card");
titleInfo.classList.add("title", "card-info");
pTitle.innerText = "Name:";
titleSpan.classList.add("title-span");
authorInfo.classList.add("author", "card-info");
pAuthor.innerText = "Author:";
spanAuthor.classList.add("author-span");
pagesInfo.classList.add("pages", "card-info");
pPages.innerText = "Pages:";
spanPages.classList.add("pages-span");


submitBtn.addEventListener("click", () => {
  const titleDataValue = titleData.value;
  const authorDataValue = authorData.value;
  const pagesDataValue = pagesData.value;
  const bookRead = bookReadCheck.checked;

  
  

 


  


  addBookToLibrary(titleDataValue, authorDataValue, pagesDataValue, bookRead);

  titleInfo.appendChild(pTitle);
  titleInfo.appendChild(titleSpan);
  authorInfo.appendChild(pAuthor);
  authorInfo.appendChild(spanAuthor);
  pagesInfo.appendChild(pPages);
  pagesInfo.appendChild(spanPages);

  cards.appendChild(titleInfo);
  cards.appendChild(authorInfo);
  cards.appendChild(pagesInfo);

  cards.appendChild(readOrNotBtn);
  
  deleteBtn.classList.add("delete");
  deleteBtn.innerText = "Remove";
  cards.appendChild(titleInfo);
  cards.appendChild(deleteBtn);
  cardContainer.appendChild(cards);

  dialog.close();
});
cancelBtn.addEventListener("click", () => {
  dialog.close();
});

readOrNotBtn.addEventListener("click", () => {
  if (
    readOrNotBtn.classList.contains("yes") ||
    readOrNotBtn.textContent === "Read"
  ) {
    readOrNotBtn.classList.remove("yes");
    readOrNotBtn.classList.add("no");
    readOrNotBtn.textContent = "Not Read";
  }else if(
    readOrNotBtn.classList.contains('no') || readOrNotBtn.textContent === 'Not Read'
  ){
    readOrNotBtn.classList.remove("no");
    readOrNotBtn.classList.add("yes");
    readOrNotBtn.textContent = "Read";
  }
});


