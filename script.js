let myLibrary = [];

function Book(author, title, pages){
    this.author=author;
    this.title=title;
    this.pages=pages;
    this.read = false;
    this.index = myLibrary.length;

    this.display = function(){
        console.log(this.author, this.title, this.pages)
        return this.author, this.title, this.pages; //either need to use string literals here or pack into an array.
    }


}


function updateIndexes(){
    myLibrary.forEach((book, index)=>{
        book.index=index;
        console.log(book.title + book.index);
})
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

    //gives book object id of title
    bookObject.id = book.title;



    //adds buttons below book
    let bookButtons = document.createElement("div");
    bookButtons.classList.add("bookButtons");

    let readDiv = document.createElement("div");
    readDiv.innerText = "Unread";
    readDiv.classList.add("readText");

    let readButton = document.createElement("button");
        readButton.innerHTML = "Read";
        readButton.classList.add("readButton");
        readButton.addEventListener("click", function(){
            if(readDiv.innerHTML == "Unread"){
                readDiv.innerHTML = "Read";
            }
            else{
                readDiv.innerHTML = "Unread";
            }
        })
    let removeButton = document.createElement("button");
        removeButton.innerHTML = "Remove";
        removeButton.classList.add("removeButton");
        removeButton.addEventListener("click", function(){ //removes book
            myLibrary = myLibrary.filter(function(item){ //removes book from myLibrary
                console.log(book.title + "namethingy");
                return item.title != book.title;
            })
            bookCard.remove(); //removes actual div from DOM

            updateIndexes(); // updates all books and indexes
        })
    


    

    bookButtons.appendChild(readButton);
    bookButtons.appendChild(removeButton);
    bookButtons.appendChild(readDiv);
 

    //formats book and buttons together before being displayed
    let bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");
    bookCard.appendChild(bookObject);
    bookCard.appendChild(bookButtons);




    //appends book to display element
    let display = document.getElementById("display");
    display.appendChild(bookCard);

    myLibrary.push(book);
    console.log(book.index);


    updateIndexes();
    }







const addBookButton = document.getElementById("addBookButton");
addBookButton.addEventListener("click", function(){
        const form = document.getElementById("bookForm");
        form.style.display = "flex";
    })
document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault(); // This stops the page reload. 
    //*Future note: Needs to be added to the FORM, not the submit button


    let name = document.getElementById("formTitle");
    let author = document.getElementById("formAuthor");
    let pages = document.getElementById("formPages");

    let book = new Book(name.value, author.value, pages.value);
    addBookToLibrary(book);
    document.getElementById("bookForm").reset();
  });



const Hobbit = new Book("Tolkein", "The Hobbit", 304);
//const Hobbit2 = new Book("Miguel de Cervantes", "Don Quixote", 304);
//const Hobbit3 = new Book("Lewis Carroll", "The Adventures of Huckleberry Finn", 304);
//const Hobbit4 = new Book("Mark Twain", "The Adventures of Tom Sawyer", 304);
//const Hobbit5 = new Book("Robert Louis Stevenson", "Treasure Island", 304);
//const Hobbit6 = new Book("Jane Austen", "Pride and Prejudice", 304);
//const Hobbit7 = new Book("Charlotte Brontë", "Wuthering Heights", 304);


addBookToLibrary(Hobbit);
//addBookToLibrary(Hobbit2);
//addBookToLibrary(Hobbit3);
//addBookToLibrary(Hobbit4);
//addBookToLibrary(Hobbit5);
//addBookToLibrary(Hobbit6);
//addBookToLibrary(Hobbit7);

