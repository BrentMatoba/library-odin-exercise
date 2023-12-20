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
    //obviously I will need to edit this to display to the dom not just the console
    myLibrary.push(book);
}

function displayLibrary(){
    //obviously I will need to edit this to display to the dom not just the console
    for(let i=0; i<myLibrary.length; i++){
       console.log(myLibrary[i].display());
    }
}

let bookButton = document.getElementById("addBookButton");
bookButton.addEventListener("click", function(){
    console.log("Buoop");
})





const Hobbit = new Book("Tolkein", "The Hobbit", 304);
addBookToLibrary(Hobbit);
displayLibrary();