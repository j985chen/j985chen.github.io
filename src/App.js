import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAngleLeft, faAngleRight, faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleLeft, faAngleRight, faEnvelope, faFileAlt, fab);

function App() {
  return (
    <>
        <div className='displayNotAvailable'>
            <p>
                This website is currently under construction.
            </p> 
            <p>
                In the meantime, please check out my <a href='http://github.com/j985chen'>GitHub</a> and <a href='http://linkedin.com/in/j985chen'>LinkedIn</a>!
            </p>
        </div>
    </>
  );
}

export default App;
