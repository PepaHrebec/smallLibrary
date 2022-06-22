const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const checkInp = document.querySelector("#read");
const btn = document.querySelector(".submit");
const tables = document.querySelector(".tables");

btn.addEventListener("click", () => {
    if(check()) {
        const newBook = new Book(title.value,author.value,pages.value,checkInp.checked);
        pushToLib(newBook);
        console.log(library);
        createCard(newBook);
        title.value="";
        author.value="";
        pages.value="";
        checkInp.checked=false;
    };
});

// ------------- functions

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;    
    }
}

function pushToLib(book) {
    library.push(book);
};

function createCard(book) {
    const card = document.createElement("div");
    card.classList.add("bookCard");
    const p1 = document.createElement("p");
    p1.innerHTML="Title:";
    const p2 = document.createElement("p");
    p2.innerHTML=`${book.title}`;
    const p3 = document.createElement("p");
    p3.innerHTML="Author:";
    const p4 = document.createElement("p");
    p4.innerHTML=`${book.author}`;
    const p5 = document.createElement("p");
    p5.innerHTML="Length:";
    const p6 = document.createElement("p");
    p6.innerHTML=`${book.pages} pages`;
    const p7 = document.createElement("p");
    p7.innerHTML="Read:";
    const p8 = document.createElement("p");
    if(book.read) {
        p8.innerHTML="Yes";     
    } else {
        p8.innerHTML="No";
    };
    const btn = document.createElement("button");
    btn.classList.add("remBtn");
    btn.innerHTML="Remove";
    btn.addEventListener("click", () => {
        btn.parentNode.remove();
    });
    card.append(p1,p2,p3,p4,p5,p6,p7,p8,btn);
    tables.appendChild(card);
}

function errorOpac(emptyElem) {
    if(emptyElem.value.trim()=="") {
        emptyElem.nextElementSibling.style.opacity=1;
    } else {
        emptyElem.nextElementSibling.style.opacity=0;
    }    
}

function check() {
    if(title.value.trim()=="" || author.value.trim()=="" || pages.value.trim()=="") {
        errorOpac(title);
        errorOpac(author);
        errorOpac(pages);
        return 0;
    } else {
        return 1;
    };
};

const library = [];