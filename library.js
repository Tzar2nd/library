let library = [];

function Book(title, author, pages, releaseDate, read) {
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.releaseDate = releaseDate;
    this.read = read;
}

function addBookToLibrary(book) {
    library.push(book);
}

// Add book elements to DOM via data-key
function addBookToDOM(book) {
    let element = document.getElementById("card-content");
    let div = document.createElement('div');
    let table = document.createElement('table');
    let text = document.createTextNode('Hi its text');

    div.classList.add('card-container');

    // Loop through the array and enter into the table
    for(let i = 0; i<=library.length; i++) {
        for(var prop in library[i]) {
            obj = library[i];
            Object.keys(obj).forEach((key, index) => {
                console.log(key);
                console.log(index);
            });
        }
    }

    element.appendChild(div).appendChild(table).appendChild(text);
}

// remove book from DOM via data-key
function removeBookFromDOM(book) {
}

function displayBook(library) {
    console.log(library);
    for(const book in library) {
        console.log(book);
    }
}

theHobbit = new Book('The Hobbit', 'JRR Tolkien', '300', '1984', 'Yes');
nineteenEightyFour = new Book('1984', 'George Orwell', '280', '1985', 'Yes');
addBookToLibrary(theHobbit);
addBookToLibrary(nineteenEightyFour);
addBookToDOM(theHobbit);

displayBook(library);
