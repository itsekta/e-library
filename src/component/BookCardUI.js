import { useState, useEffect, useRef } from "react";
import { Spinner } from "@nextui-org/react";

export default function BookCardUI() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isInitialMount = useRef(true);

  async function fetchBooks() {
    try {
      const response = await fetch(
        "https://openlibrary.org/people/mekBot/books/already-read.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }
      const data = await response.json();
      setBooks(data.reading_log_entries);
      setIsLoading(false); // Set loading state to false after data is fetched
    } catch (error) {
      console.error("Error fetching books:", error);
      setIsLoading(false); // Set loading state to false if there's an error
    }
  }

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setIsLoading(true); // Set loading state to true before fetching data
      fetchBooks();
    }
  }, []);

  return (
    <div className="container px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Books</h1>
      {isLoading ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex gap-2 flex-wrap ">
          {books && books.length > 0 ? (
            books.map((book) => (
              <div className="flex flex-col items-center bg-stone-100">
                <div key={book.work.key}>
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.work.cover_id}-M.jpg`}
                    alt={book.work.title}
                    className="w-200px h-200px mb-2 rounded-md"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">{book.work.title}</h3>
                    <p className="text-sm text-gray-600">
                      Author: {book.work.author_names.join(", ")}
                    </p>
                    <p className="text-sm text-gray-600">
                      Published Year: {book.work.first_publish_year}
                    </p>
                    <button
                      className={`mt-2 py-1 px-3 rounded ${
                        book.logged_edition
                          ? "bg-green-500 text-white"
                          : "border border-gray-400 text-gray-600"
                      }`}
                    >
                      {book.logged_edition ? "Read" : "Unread"}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No books found</div>
          )}
        </div>
      )}
    </div>
  );
}
