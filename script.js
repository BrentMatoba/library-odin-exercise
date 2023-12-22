let myLibrary = [];

function Book(author, title, pages){
    this.author=author;
    this.title=title;
    this.pages=pages;

    this.display = function(){
        console.log(this.author, this.title, this.pages)
        return this.author, this.title, this.pages; //either need to use string literals here or pack into an array.
    }
}
function addBookToLibrary(book){
    //creates book div for dom
    let bookObject = document.createElement("div")
    bookObject.classList.add("book");

    //creates title, author, page number divs to be applied to book
    let titleString = document.createElement("div");
    titleString.textContent = book.title;
    titleString.classList.add("title");

    let authorString = document.createElement("div");
    authorString.textContent = book.author;
    authorString.classList.add("author");

    let pagesString = document.createElement("div");
    pagesString.textContent = book.pages;
    pagesString.classList.add("pages");

    //applies text to book
    bookObject.appendChild(titleString);
    bookObject.appendChild(authorString);
    bookObject.appendChild(pagesString);

    //appends book to display element
    let display = document.getElementById("display");
    display.appendChild(bookObject);

}



function displayLibrary(){
    //obviously I will need to edit this to display to the dom not just the console
    for(let i=0; i<myLibrary.length; i++){
       console.log(myLibrary[i].display());
    }
}






const addBookButton = document.getElementById("addBookButton");
addEventListener("click", function(){
        const form = document.getElementById("bookForm");
        form.style.display = "flex";
    })
document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault(); // This stops the page reload. 
    //*Future note: Needs to be added to the FORM, not the submit button
        

  });



const Hobbit = new Book("Tolkein", "The Hobbit", 304);
const Hobbit2 = new Book("Miguel de Cervantes", "Don Quixote", 304);
const Hobbit3 = new Book("Lewis Carroll", "The Adventures of Huckleberry Finn", 304);
const Hobbit4 = new Book("Mark Twain", "The Adventures of Tom Sawyer", 304);
const Hobbit5 = new Book("Robert Louis Stevenson", "Treasure Island", 304);
const Hobbit6 = new Book("Jane Austen", "Pride and Prejudice", 304);
const Hobbit7 = new Book("Charlotte Brontë", "Wuthering Heights", 304);


addBookToLibrary(Hobbit);
addBookToLibrary(Hobbit2);
addBookToLibrary(Hobbit3);
addBookToLibrary(Hobbit4);
addBookToLibrary(Hobbit5);
addBookToLibrary(Hobbit6);
addBookToLibrary(Hobbit7);

displayLibrary();