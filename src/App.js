import './App.css';
import Book from './components/book';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleLeft, faAngleRight);

function App() {
  return (
    <Book />
  );
}

export default App;
