import './App.css';
import Book from './components/book';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAngleLeft, faAngleRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleLeft, faAngleRight, faEnvelope, fab);

function App() {
  return (
    <Book />
  );
}

export default App;
