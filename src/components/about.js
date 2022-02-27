import React from 'react';
import pic from '../images/pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../App.css';

const About = () => {
    return (
        <div className='folder' id='aboutFolder'>
            <div className='mobileTab'>about</div>
            <div className='content selected' id='aboutContent'>
                <img id='portrait' src={pic} style={{}}></img>
                <div id='aboutText'>
                    <h3 id='heading'>hi! i'm janet chen.</h3>
                    <p>
                        i'm a second-year software engineering student at the university of waterloo. currently, i'm developing core microservices as a software engineering intern at bitgo. in the past, i've also interned at ncr and counting opinions.
                    </p>
                    <p>    
                        in my free time, i enjoy reading, playing the piano, going on long hikes with my camera, and tinkering with my mechanical keyboard. feel free to send me book recommendations - i'm always looking to add to my ever-growing to-be-read list!
                    </p>
                    <p>
                        let's connect! click on the icons below to grab my email, linkedin, and github.
                    </p>
                    <div id='icons'>
                        <a href='mailto:janet.chen@uwaterloo.ca' title='Email'>
                            <FontAwesomeIcon icon={['fas', 'envelope']} />
                        </a>
                        <a href='https://github.com/j985chen' title='GitHub'>
                            <FontAwesomeIcon icon={['fab', 'github']} />
                        </a>
                        <a href='https://linkedin.com/in/j985chen/' title='LinkedIn'>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
