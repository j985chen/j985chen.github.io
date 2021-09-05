import pic from '../images/pic.jpeg';
import markdemo from '../images/markdemo.gif';
import stronglanguagedemo from '../images/stronglanguagedemo.gif';
import feliciabotdemo from '../images/feliciabotdemo.gif';
import bookmobiledemo from '../images/bookmobiledemo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const pages = [
    {
        title: 'Hello!',
        body: (
            <>
                <img src={pic} alt='Picture of me' style={{borderRadius: '100px', maxWidth: '150px'}}/>
                <p>
                    I'm Janet Chen, a second-year software engineering student at the University of Waterloo.
                </p>
                <p>
                    Currently, I'm interested in full-stack web development and AI/ML. I've worked at NCR on their Teller UI Banking application, and Counting Opinions as a web developer.
                </p>
                <p>
                    Here's where you can find me:
                </p>
                <p>
                    <a href='https://github.com/j985chen' title='GitHub'>
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a> 
                    <a href='https://linkedin.com/in/j985chen' title='LinkedIn'>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a> 
                </p>
            </>
        ),
    },
    {
        title: 'Here are some projects I\'ve worked on...',
        body: '',
    },
    {
        title: 'Bookmobile (WIP)',
        body: (
            <>
                <img src={bookmobiledemo} alt='Screenshot of bookmobile login page' style={{width: '75%'}} />
                <p>A mobile app which tracks how many books you read per year, inspired by the 50-book pledge</p>
                <p><em>Technologies used: Spring Boot, React Native, MySQL</em></p>
            </>
        ),
    }, 
    {
        title: 'Strong Language Detector Extension',
        body: (
            <>
                <img src={stronglanguagedemo} alt='Demo of Strong Language Detector Extension' style={{minWidth: '100%'}} />
                <p>A Google Chrome extension which uses an API based on an NLP model to censor strong language on webpages</p>
                <p><em>Technologies used: pandas, scikit-learn, Flask, JavaScript, Chrome extension APIs</em></p>
            </>
        ),
    }, 
    {
        title: 'Mark, the Grade Tracker',
        body: (
            <>
                <img src={markdemo} alt='Demo of Mark' style={{minWidth: '100%'}}/>
                <p>A grade-tracking application inspired by Notion</p>
                <p><em>Technologies used: MongoDB, Mongoose, Express.js, React, Node.js</em></p>
            </>
        ),
    },
    {
        title: 'FeliciaBot',
        body: (
            <>
                <img src={feliciabotdemo} alt='Demo of FeliciaBot' style={{minWidth: '100%'}} />
                <p>A Discord bot study buddy/assistant that handles translations, Wikipedia searches, dictionary/thesaurus lookups, and to-do lists</p>
                <p><em>Technologies used: MongoDB, Discord.js, Node.js</em></p>
            </>
        ),
    },
    {
        title: 'Let\'s get in touch!',
        body: (
            <>
                <p>My email is <a href='mailto:janet.chen@uwaterloo.ca'>janet.chen@uwaterloo.ca</a>.</p>
                <p>Feel free to contact me for my resume, for more information about anything on this website, or to send book recommendations (right now I'm reading <b>Circe by Madeline Miller</b>).</p>
            </>
        ),
    },
];

export default pages;