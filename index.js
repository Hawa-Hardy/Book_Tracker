class Book {
    constructor(title, author, publicationYear, ISBN, read = true) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
        this.ISBN = ISBN;
        this.read = read;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, author, publicationYear, ISBN) {
        const newBook = new Book(title, author, publicationYear, ISBN);
        this.books.push(newBook);
        this.updateBookList();
    }

    removeBook(ISBN) {
        this.books = this.books.filter((book) => book.ISBN !== ISBN);
        this.updateBookList();
    }

    toggleReadStatus(ISBN) {
        const book = this.books.find((book) => book.ISBN === ISBN);
        if (book) {
            book.read = !book.read;
            this.updateBookList();
        }
    }

    listBooks() {
        return this.books.map(book => {
            const readStatus = book.read ? "Read" : "Not Read";
            return `${book.title} by ${book.author} (${book.publicationYear}) - ${readStatus}`;
        });
    }

    updateBookList() {
        const bookListElement = document.getElementById("bookList");
        bookListElement.innerHTML = "";

        this.books.forEach(book => {
            const li = document.createElement("li");
            const readButton = document.createElement("button");
            readButton.textContent = book.read ? "Mark as Unread" : "Mark as Read";
            readButton.addEventListener("click", () => {
                this.toggleReadStatus(book.ISBN);
            });
            li.textContent = `ISBN: ${book.ISBN} - ${book.title} by ${book.author} (${book.publicationYear}) - ${book.read ? "Read" : "Not Read"}`;
            li.appendChild(readButton);

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", () => {
                this.removeBook(book.ISBN);
            });
            li.appendChild(removeButton);

            bookListElement.appendChild(li);
        });

        this.updateBookCount();
    }

    updateBookCount() {
        const bookCountElement = document.getElementById("bookCount");
        bookCountElement.textContent = this.books.length;
    }
}

const library = new Library();

function addBook() {
    try {
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const publicationYear = document.getElementById("pubYear").value;
        const ISBN = document.getElementById("isbn").value;

        let errorMessage = "";

        switch (true) {
            case !title:
                errorMessage = "Please enter the title.";
                break;
            case !author:
                errorMessage = "Please enter the author.";
                break;
            case !publicationYear:
                errorMessage = "Please enter the publication year.";
                break;
            case !ISBN:
                errorMessage = "Please enter the ISBN.";
                break;
            default:
                library.addBook(title, author, publicationYear, ISBN);
                document.getElementById("title").value = "";
                document.getElementById("author").value = "";
                document.getElementById("pubYear").value = "";
                document.getElementById("isbn").value = "";
        }

        if (errorMessage) {
            throw new Error(errorMessage);
        }
    } catch (error) {
        alert(error.message);
    }
}

function updateBookCount() {
    library.updateBookCount();
}

updateBookCount();
