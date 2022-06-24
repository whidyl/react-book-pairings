
import { useState } from 'react';
import './App.css';
import BookList from './components/BookList';
import PairingsMenu from './components/PairingsMenu';

function App() {
  const [isPairingsShown, setIsPairingsShown] = useState(false);
  return (
    <div className="App">
      <BookList openPairings={() => {setIsPairingsShown(true)}}/>
      {isPairingsShown ? <PairingsMenu /> : <></>}
    </div>
  );
}

export default App;
