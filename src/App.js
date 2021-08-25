import './App.css';
import Book from './components/book';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAngleLeft, faAngleRight, faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleLeft, faAngleRight, faEnvelope, faFileAlt, fab);

function App() {
  return (
    <Book />
  );
}

export default App;
