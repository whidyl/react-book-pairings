
import { useState } from 'react';
import './App.css';
import BookList from './components/BookList';
import PairingsMenu from './components/PairingsMenu';

function App() {
  const [selectedBook, selectBook] = useState(null);
  
  return (
    <div className="App">
      {selectedBook ? <PairingsMenu book={selectedBook} close={() => {selectBook(null)}}/> : <></>}
      <BookList selectBook={selectBook}/>
    </div>
  );
}

export default App;
