import pic from '../images/pic.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const pages = [
    {
        title: 'Hello!',
        body: (
            <>
                {<img src={pic} alt='Picture of me' />}
                <p>
                    I'm Janet Chen, a second-year software engineering student at the University of Waterloo. Currently, I'm interested in full-stack web development and AI/ML.
                </p>
                <p>
                    Here's where you can find me:
                </p>
                <p>
                    <a href='https://github.com/j985chen' title='GitHub'>
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a> 
                    <a href='https://linkedin.com/in/janetchenlink' title='LinkedIn'>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a> 
                    <a href='mailto:janet.chen@uwaterloo.ca' title='Email'>
                        <FontAwesomeIcon icon='envelope' />
                    </a>
                    <a href='/' title='Resume'>
                        <FontAwesomeIcon icon='file-alt' />
                    </a>
                </p>
            </>
        ),
    },
    /* {
        title: 'Skills',
        body: '',
    },
    {
        title: 'Work experience',
        body: '',
    },
    {
        title: 'Projects',
        body: '',
    },
    {
        title: 'Contact me',
        body: '',
    }, */ 
];

export default pages;