import React, { useState } from "react";

function BookList({ booksData }) {
  return (
    <div>
      {booksData.map((book, index) => (
        <BookItem key={index} book={book} />
      ))}
    </div>
  );
}

function BookItem({ book }) {
  const [isRead, setIsRead] = useState(false);

  const toggleReadStatus = () => {
    setIsRead(!isRead);
  };

  return (
    <div className="book-item">
      <img
        src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
        alt={book.title}
      />
      <div className="book-details">
        <h3>{book.title}</h3>
        <p>Author: {book.author_names.join(", ")}</p>
        <p>Published Year: {book.first_publish_year}</p>
        <button
          onClick={toggleReadStatus}
          className={isRead ? "read" : "unread"}
        >
          {isRead ? "Read" : "Unread"}
        </button>
      </div>
    </div>
  );
}

export default BookList;
