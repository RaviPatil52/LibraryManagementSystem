import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/booksList.css";
const BooksList = () => {
  let location = useLocation();

  let [books, setBooks] = useState([]);

  useEffect(() => {
    let fetchBooks = async () => {
      let response = await fetch("http://localhost:4000/books");
      let data = await response.json();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  // console.log(location.pathname);

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/books/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(books),
    });
    window.location.reload();
  };

  let handleIns = (id) => {
    setBooks(books.filter((data) => data.id !== id));
  };
  return (
    <div className="books-list">
      <div className="books-list-h1">
        <h1>Books List</h1>
      </div>
      <div className="books-list2">
        {books.map((data) => (
          <div className="books-list-map">
            <h1>{data.title}</h1>
            <p>{data.author}</p>
            {location.pathname == "/admin-portal/books-list" && (
              <button onClick={() => handleDelete(data.id)}>Delete</button>
            )}
            {location.pathname == "/user-portal/books-list" && (
              <button id="btn5" onClick={() => handleIns(data.id)}>
                Not Interested
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksList;
