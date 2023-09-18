# Book Tracker Web Application

This is a simple web application for tracking your book collection. It allows users to add books with details like title, author, publication year, and ISBN to their library. You can add, remove, and mark books as read or unread using this application.

## Instructions

1. **Adding a Book:**
   - Enter the book's title, author, publication year, and ISBN in the corresponding input fields.
   - Click the "Add Book" button to add the book to your collection.
   - If any of the input fields are empty, an error message will be displayed, and the book will not be added.

2. **Viewing a Book**
    - Books added are automatically displayed

2. **Removing a Book:**
   - Each book in your collection has a "Remove" button.
   - Click the "Remove" button next to a book to remove it from your collection.

3. **Marking a Book as Read/Unread:**
   - Each book also has a "Mark as Read" or "Mark as Unread" button.
   - Click the button to toggle the read status of the book.

4. **Viewing Library Statistics**:
   - The total number of books in your library is displayed at the top.

## Incorporation of JavaScript Features

### Classes (Book and Library)

- The code includes two JavaScript classes: `Book` (line 1) and `Library` (line 11). These classes help organize and manage the book collection and its properties.

### Switch Statement

- A switch statement is used in the `addBook` function (on line 86) for input validation. It checks if all required fields (title, author, publication year, and ISBN) are filled in before adding a book to the library.

### Try-Catch-Finally Statement

- The `addBook` function (from line 77 to 113) is wrapped in a try-catch block to handle errors. If any validation error occurs, an error message is displayed using `alert()` (line 111). This ensures proper error handling and a smooth user experience.

## Styling

The web application is styled using CSS to make it visually appealing and user-friendly.

## Enjoy tracking your books read