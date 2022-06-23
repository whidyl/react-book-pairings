import {useEffect, useState} from 'react';
import Book from './Book';

const API_KEY = "AIzaSyAXWya3wtbcU8PkfNwB4499fEj3x87UE_0";

function BookList() {
    const [books, setBooks] = useState(null);

    useEffect(() => {
        async function fetchBookList() {
            try {
                await fetch("https://www.googleapis.com/books/v1/volumes?q=dune&maxResults=10&key=" + API_KEY)
                    .then(res => res.json())
                    .then(res => {
                        console.log(res);
                        setBooks(res.items.map(bookObj => 
                            <Book 
                                title={bookObj.volumeInfo.title}
                                id={bookObj.id}
                                key={bookObj.id}
                                thumbnailSrc={bookObj.volumeInfo.imageLinks.smallThumbnail}
                            />))
                    })
                
            } catch (e) {
                console.log(e);
            }
        }
        
        fetchBookList();
    }, []);

    return <ul>
        {books}
    </ul>;
}

export default BookList;