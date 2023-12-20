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
    myLibrary.push(book);
}

function displayLibrary(){
    for(let i=0; i<myLibrary.length; i++){
       console.log(myLibrary[i].display());
    }
}

const Hobbit = new Book("Tolkein", "The Hobbit", 304);
addBookToLibrary(Hobbit);
displayLibrary();