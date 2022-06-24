import { useEffect, useState } from "react";
import BookCard, { Book, makeBookFromGBApiItem } from "./BookCard";

const API_KEY = "AIzaSyAXWya3wtbcU8PkfNwB4499fEj3x87UE_0";

const makeGoogleApiUrl = (query, maxResults) => `
    https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&key=${API_KEY}`;

function BookList({ selectBook }) {
  const [books, setBooks] = useState(null);

  function setBooksFromRes(res) {
    setBooks(
      res.items.map((item) => (
        <li key={item.id}>
          <BookCard
            book={makeBookFromGBApiItem(item)}
            selectBook={selectBook}
          />
        </li>
      ))
    );
  }

  useEffect(() => {
    async function fetchBookList() {
      await fetch(makeGoogleApiUrl("dune", 10))
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setBooksFromRes(res);
        });
    }

    fetchBookList();
  }, []);

  return <ul>{books}</ul>;
}

export default BookList;
