let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = read;
    this.info = () => (
        this.title + ", " + 
        this.author + ", " +
        this.pages + ", " +
        this.read
    );
}

function addBookToLibrary(book) {
    library.push(book);
}

// Add book elements to DOM via data-key
function addBookToDOM(book) {
}

// remove book from DOM via data-key
function removeBookFromDOM(book) {
    
}

theHobbit = new Book('The Hobbit', 'JRR Tolkien', '300', 'Yes');
nineteenEightyFour = new Book('1984', 'George Orwell', '280', 'Yes');
addBookToLibrary(theHobbit);
addBookToLibrary(nineteenEightyFour);
console.log(theHobbit.info());
console.log(nineteenEightyFour.info());
console.table(library);
