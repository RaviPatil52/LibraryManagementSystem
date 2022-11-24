import { useState } from "react";
import "../styles/addBooks.css";

const AddBooks = () => {
  let [title, setTitle] = useState("");
  let [author, setAuthor] = useState("");

  let handleSubmit = (e) => {
    fetch("http://localhost:4000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author }),
    });
    alert("added successfully");
  };

  let handleReset = () => {
    setTitle("");
    setAuthor("");
  };
  return (
    <section className="section">
     <div className="section-div">
     <div className="add-books">
        <div className="add-books2">
          <h1>Add Books</h1>

          <form action="" onSubmit={handleSubmit}>
            <div className="form1">
              <label htmlFor="">Title</label>
            </div>
            <div className="form2">
              <input
                type="text"
                placeholder="enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form3">
              <label htmlFor="">Author</label>
            </div>
            <div className="form4">
              <input
                type="text"
                placeholder="enter author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="form5">
              <button className="btn1">Submit</button>
              <button className="btn2" onClick={handleReset} type="reset">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
     </div>
    </section>
  );
};

export default AddBooks;
