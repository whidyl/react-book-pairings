
import { useState } from 'react';
import './App.css';
import BookList from './components/BookList';
import PairingsMenu from './components/PairingsMenu';

function App({queryDelay=0}) {
  const [selectedBook, selectBook] = useState(null);
  const [bookQuery, setBookQuery] = useState("");
  
  return (
    <div className="App">
      {selectedBook ? <PairingsMenu book={selectedBook} close={() => {selectBook(null)}}/> : <></>}
      <input data-testid="book-search-input" value={bookQuery} onChange={(e) => {setBookQuery(e.target.value)}}/>
      <BookList selectBook={selectBook} bookQuery={bookQuery} queryDelay={700}/>
    </div>
  );
}

export default App;
