let myLibrary = [];

function Book(author, title, pages){
    this.author=author;
    this.title=title;
    this.pages=pages;
    this.read = false;
    this.index = myLibrary.length;
}


function updateIndexes(){
    //iterates over library, assigns index to books. Used after myLibrary has been altered
    console.log("Library: ");
    myLibrary.forEach((book, index)=>{
        book.index=index;
        console.log("Title: " + "\""+ book.title+"\", " + " Index: "+book.index);
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

    //Displays read/unread text
    let readDiv = document.createElement("div");
    readDiv.innerText = "Unread";
    readDiv.classList.add("readText");

    let readButton = document.createElement("button");
        readButton.innerHTML = "Read";
        readButton.classList.add("readButton");
        readButton.addEventListener("click", function(){
            if(readDiv.innerHTML == "Unread"){
                readDiv.innerHTML = "Read";
                book.read = true;
            }
            else{
                readDiv.innerHTML = "Unread";
                book.read = false;
            }
        })
    let removeButton = document.createElement("button");
        removeButton.innerHTML = "Remove";
        removeButton.classList.add("removeButton");
        removeButton.addEventListener("click", function(){ //removes book
            myLibrary = myLibrary.filter(function(item){ //removes book from myLibrary
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

    myLibrary.push(book); //adds book to library
    updateIndexes(); //updates indexs of all books in library
    }



const addBookButton = document.getElementById("addBookButton"); //button that brings up form
addBookButton.addEventListener("click", function(){
        const form = document.getElementById("bookForm");
        form.style.display = "flex"; //makes form visible
    })


document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault(); // This stops the page reload. 
    //*Future note: Needs to be added to the FORM, not the submit button


    let name = document.getElementById("formTitle");
    let author = document.getElementById("formAuthor");
    let pages = document.getElementById("formPages");

    let book = new Book(name.value, author.value, pages.value); //instantiates book
    addBookToLibrary(book);  //adds book to library
    document.getElementById("bookForm").reset(); //clears form
  });



const Hobbit = new Book("J.R.R. Tolkien", "The Hobbit", 304);
addBookToLibrary(Hobbit);


