
// book data recevie
let bookTitle;
let bookAuthor;
let bookPages;
let bookStatus;


// input collect

let titleData = document.querySelector('#titleData')
let authorData = document.querySelector('#authorData')
let pagesData = document.querySelector('#pagesData')
let statusData = document.querySelector('#book-read')


let myLibrary = []

const cardContainer = document.querySelector('.cards-container');

let globalIndex = 0;

function Book(title, author, pages, status) {

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages, bookStatus) {
  myLibrary.push(new Book(bookTitle, bookAuthor, bookPages, bookStatus))
}

function createBook(libray) {

  cardContainer.innerHTML = '';
  libray.forEach((element) => {

    if (element.status === true) {
      let div = document.createElement('div');
      div.classList.add('card')
      div.innerHTML = `
    <div class="title card-info">
              <p>Name:</p>
              <span class="title-span">${element.title}</span>
            </div>
            <div class="author card-info">
              <p>Author:</p>
              <span class="author-span">${element.author}</span>
            </div>
            <div class="pages card-info">
              <p>Pages:</p>
              <span class="pages-span">${element.pages}</span>
            </div>
            <button onclick="colorChange(this)"  class="readOrNot yes">Read</button>
            <button onclick="deleteMe(this)" class="delete">Remove</button>
    `
      cardContainer.appendChild(div)

    } else {
      let div = document.createElement('div');
      div.classList.add('card')
      div.innerHTML = `
    <div class="title card-info">
              <p >Name:</p>
              <span class="title-span wrap">${element.title}</span>
            </div>
            <div class="author card-info">
              <p>Author:</p>
              <span class="author-span wrap">${element.author}</span>
            </div>
            <div class="pages card-info">
              <p>Pages:</p>
              <span class="pages-span">${element.pages}</span>
            </div>
            <button onclick="colorChange(this)" class="readOrNot no">Not Read</button>
            <button onclick="deleteMe(this)"  class="delete">Remove</button>
    `
      cardContainer.appendChild(div)
    }





  });

}


// removing books 
function deleteMe(event) {
  let parentDiv = event.parentElement;
  const index = Array.from(cardContainer.children).indexOf(parentDiv);
  if (index > -1) {
    myLibrary.splice(index, 1);
    createBook(myLibrary);
  }

}





function clearValue() {
  titleData.value = '';
  authorData.value = '';
  pagesData.value = '';
  statusData.checked = false;
}



let form = document.querySelector('#form-submit');
let closeBtn = document.querySelector('.cancel-btn');


closeBtn.addEventListener("click", () => {
  dialog.close();
});


let addBookBtn = document.querySelector('.add-book');
let dialog = document.querySelector('#dialog')
addBookBtn.addEventListener('click', () => {
  dialog.showModal();
})




function colorChange(button) {
  if (
    button.classList.contains("yes") ||
    button.textContent === "Read"
  ) {
    button.classList.remove("yes");
    button.classList.add("no");
    button.textContent = "Not Read";
  } else if (
    button.classList.contains('no') || button.textContent === 'Not Read'
  ) {
    button.classList.remove("no");
    button.classList.add("yes");
    button.textContent = "Read";
  }
}

// added the functuallllity to add card its container

form.addEventListener('submit', (e) => {


  e.preventDefault();
  bookTitle = titleData.value.trim();
  bookAuthor = authorData.value.trim();
  bookPages = parseInt(pagesData.value);
  bookStatus = statusData.checked;



  const result = myLibrary.find(book => book.title === bookTitle)
  if (result) {
    alert('The book already exists in the library');
    return;
  }
  addBookToLibrary(bookTitle, bookAuthor, bookPages, bookStatus)
  createBook(myLibrary);
  clearValue();
  dialog.close();






})