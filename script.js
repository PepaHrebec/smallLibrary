function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function pushToLib(book) {
    library.push(book);
};

function check() {
    if(title.value.trim()=="" || author.value.trim()=="" || pages.value.trim()=="") {
        return 0;
    } else {
        return 1;
    };
};

const library = [];