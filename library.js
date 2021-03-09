let library = [];

function Book(title, author, pages, releaseDate, read) {
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.releaseDate = releaseDate;
    this.read = read;
    this.imageSrc = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546071216l/5907.jpg'
}

function addBookToLibrary(book) {
    library.push(book);
}

// Add book elements to DOM via data-key
function addBookToDOM(book, key) {
    let element = document.getElementById("card-content");

    let div = document.createElement('div');
    div.classList.add('card-container');
    div.setAttribute("data-key", key);

    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
    let tr = document.createElement('tr')
    tbody.appendChild(tr);

    // row image
    let image = document.createElement('img');
    image.src = book.imageSrc;
    image.classList.add('book-image');
    tr.appendChild(document.createElement('td')).appendChild(image);

    // Loop through the array and enter into the table
    Object.keys(book).forEach((key) => {
        if (key != 'imageSrc') {
            td = document.createElement('td');
            td.textContent = book[key];
            tr.appendChild(td);
        }
    });
    element.appendChild(div).appendChild(table);

    // Read button
    button = document.createElement('button');
    button.textContent = 'Read';
    button.classList.add('read-button');
    div.appendChild(button);

    // Delete button
    button = document.createElement('button');
    button.textContent = 'X';
    button.setAttribute("data-key", key);
    button.classList.add('trash-button');
    button.addEventListener('click', 
    () => removeBook(key));
    div.appendChild(button);
}

// remove book from DOM via data-key
function removeBook(key) {
    const div = document.querySelector(`div[data-key="${key}"]`);
    alert(key);
    div.textContent = '';
    div.parentNode.removeChild(div);
}

// Model code for popup form
var modal = document.getElementById("myModal");
var btn = document.getElementById("newBook");
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

theHobbit = new Book('The Hobbit', 'JRR Tolkien', '300', '1935', 'Yes');
nineteenEightyFour = new Book('1984', 'George Orwell', '280', '1945', 'Yes');
theRoad = new Book('The Road', 'Cormac McCarthy', '500', '1984', 'No');
addBookToLibrary(theHobbit);
addBookToDOM(theHobbit, library.length);
addBookToLibrary(nineteenEightyFour);
addBookToDOM(nineteenEightyFour, library.length);
addBookToLibrary(theRoad);
addBookToDOM(theRoad, library.length);

const saveButton = document.querySelector('.save-button');
saveButton.addEventListener('click', 
    () => { 
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    pages = document.getElementById('pages').value;
    year = document.getElementById('year').value;
    newBook = new Book(title, author, pages, year, 'No');

    addBookToLibrary(newBook);
    addBookToDOM(newBook, library.length);

    modal.style.display = "none";
}
);
