import { useState, useEffect, useRef } from "react";
import { Spinner, Button } from "@nextui-org/react";

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
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching books:", error);
      setIsLoading(false);
    }
  }
  const toggleBookStatus = (index) => {
    const updatedBooks = [...books];
    updatedBooks[index].logged_edition = !updatedBooks[index].logged_edition;
    setBooks(updatedBooks);
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setIsLoading(true);
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
          {/* {books.filter((book) => book.work.cover_id).length} */}
          {books
            .filter((book) => book.work.cover_id)
            .map((book, index) => (
              <div className=" bg-white rounded p-4" key={book.work.key}>
                <div className=" flex flex-col items-center">
                  <div className="w-50 h-50 mb-2">
                    <img
                      src={`https://covers.openlibrary.org/b/id/${book.work.cover_id}-M.jpg`}
                      alt={book.work.title}
                      className="rounded-md"
                    />
                  </div>
                  <div
                    className="flex flex-col text-wrap text-black"
                    style={{ width: "200px" }}
                  >
                    <h3 className="text-lg font-semibold text-wrap">
                      {book.work.title}
                    </h3>
                    <p className="text-sm text-gray-600 text-wrap">
                      Author: {book.work.author_names.join(", ")}
                    </p>
                    <p className="text-sm text-gray-600 text-wrap">
                      Published Year: {book.work.first_publish_year}
                    </p>
                    <Button
                      radius="sm"
                      onClick={() => toggleBookStatus(index)}
                      color={book.logged_edition ? "success" : "default"}
                    >
                      {" "}
                      {book.logged_edition ? "Read" : "Unread"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
