import { useEffect, useState } from "react";
import BookCard, { makeBookFromGBApiItem } from "./BookCard";

const API_KEY = "AIzaSyAXWya3wtbcU8PkfNwB4499fEj3x87UE_0";

const makeGoogleApiUrl = (query, maxResults) => `
    https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&key=${API_KEY}`;

function BookList({ selectBook, bookQuery, queryDelay=0 }) {
  const [books, setBooks] = useState(null);

  function setBooksFromGBItems(items) {
    setBooks(
      items.items.map((item) => (
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
      await fetch(makeGoogleApiUrl(bookQuery, 10))
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
          setBooksFromGBItems(res);
        });
    }
    
    const delayDebounceFn = setTimeout(() => {
        fetchBookList();
    }, queryDelay);

    return () => clearTimeout(delayDebounceFn);
  }, [bookQuery]);

  return <ul>{books}</ul>;
}

export default BookList;
