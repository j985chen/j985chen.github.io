import pic from '../images/pic.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const pages = [
    {
        title: 'Hello!',
        body: (
            <>
                {<img src={pic} alt='Picture of me' />}
                <p>
                    I'm Janet Chen, a second-year software engineering student at the University of Waterloo. Currently, I'm interested in <em>full-stack web development</em> and <em>AI/ML</em>.
                </p>
                <p>
                    Here's where you can find me:
                </p>
                <p><a href='https://github.com/j985chen'><FontAwesomeIcon icon={['fab', 'github']} /></a> <a href='https://linkedin.com/in/janetchenlink'><FontAwesomeIcon icon={['fab', 'linkedin']} /></a> <a href='mailto:janet.chen@uwaterloo.ca'><FontAwesomeIcon icon='envelope' /></a></p>
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