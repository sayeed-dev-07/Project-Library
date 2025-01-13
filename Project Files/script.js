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
}


function createStuff(){
    
    
    
}
let readOrNotBtn = document.createElement("button");

function retriveData(arr) {
  for (let i = 0; i < arr.length; i++) {
    
    
    let titleInfo = document.createElement("div");
    titleInfo.classList.add("title", "card-info");
    let titleSpan = document.createElement("span");
    titleSpan.classList.add("title-span");
    let pTitle = document.createElement("p");
    pTitle.innerText = "Name:";
    let authorInfo = document.createElement("div");
    let spanAuthor = document.createElement("span");
    let pagesInfo = document.createElement("div");
    let pAuthor = document.createElement("p");
    authorInfo.classList.add("author", "card-info");
    let pPages = document.createElement("p");
    let spanPages = document.createElement("span");
    let deleteBtn = document.createElement("button");
    let cards = document.createElement("div");
    cards.classList.add("card");
    pAuthor.innerText = "Author:";
    spanAuthor.classList.add("author-span");
    pagesInfo.classList.add("pages", "card-info");
    pPages.innerText = "Pages:";
    spanPages.classList.add("pages-span");
    deleteBtn.classList.add("delete");
    deleteBtn.innerText = "Remove";
    
    titleSpan.textContent = arr[i].title;
    spanAuthor = arr[i].author;
    spanPages = arr[i].pages;
    if (!arr[i].readOrNot) {
      readOrNotBtn.classList.add("no");
      readOrNotBtn.innerText = "Not Read";
    } else {
      readOrNotBtn.classList.add("yes");
      readOrNotBtn.innerText = "Read";
    }
  }

  titleInfo.appendChild(pTitle);
  titleInfo.appendChild(titleSpan);
  authorInfo.appendChild(pAuthor);
  authorInfo.appendChild(spanAuthor);
  pagesInfo.appendChild(pPages);
  pagesInfo.appendChild(spanPages);
  addToContainer()

}



const bookReadCheck = document.querySelector("#book-read");

// element creating

function creatingElements() { 
  

  // class adding
  
  
  
  
  
  

  

}


function addToSubContainer(){
  
}
function addToContainer(){
  

  cards.appendChild(titleInfo);
  cards.appendChild(authorInfo);
  cards.appendChild(pagesInfo);

  cards.appendChild(readOrNotBtn);

  
  cards.appendChild(titleInfo);
  cards.appendChild(deleteBtn);
  cardContainer.appendChild(cards);
}

function addNewCardsToContainer() {
   titleDataValue = titleData.value;
   authorDataValue = authorData.value;
   pagesDataValue = pagesData.value;
   bookRead = bookReadCheck.checked;


  
}

let titleDataValue ;
let authorDataValue ;
let pagesDataValue; 
let bookRead ;


function clearValue(){
  titleData = '';
  authorData = '';
  pagesData = '';
  bookReadCheck.reset();
}


submitBtn.addEventListener("click", () => {
  addNewCardsToContainer()
  addBookToLibrary(titleDataValue, authorDataValue, pagesDataValue, bookRead)
  retriveData(myLibrary)
  clearValue();



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
  } else if (
    readOrNotBtn.classList.contains('no') || readOrNotBtn.textContent === 'Not Read'
  ) {
    readOrNotBtn.classList.remove("no");
    readOrNotBtn.classList.add("yes");
    readOrNotBtn.textContent = "Read";
  }
});


