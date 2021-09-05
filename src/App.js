import './App.css';
import Book from './components/book';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAngleLeft, faAngleRight, faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleLeft, faAngleRight, faEnvelope, faFileAlt, fab);

function App() {
  return (
    <>
        <Book />
        <div className='displayNotAvailable'>
            <p>
                Sorry, this website doesn't support your screen's dimensions.
            </p> 
            <p>
                Please try again with another device, and in the meantime, check out my <a href='http://github.com/j985chen'>GitHub</a> and <a href='http://linkedin.com/in/j985chen'>LinkedIn</a>.
            </p>
        </div>
    </>
  );
}

export default App;
