import bookmobiledemo from '../images/bookmobiledemo.png';
import feliciabotdemo from '../images/feliciabotdemo.gif';
import markdemo from '../images/markdemo.gif';
import stronglanguagedemo from '../images/stronglanguagedemo.gif';

const projects = [
    {
        description: (
            <>
                <h3>strong language detector extension</h3>
                <p>a google chrome extension which uses an api based on an nlp model to censor strong language on webpages</p>
                <p><em>technologies used: pandas, scikit-learn, flask, javascript, chrome extension apis</em></p>
            </>
        ),
        image: (
            <img className='projectDemo' src={stronglanguagedemo} alt='Project Demo' />
        ),
    },
    {
        description: (
            <>
                <h3>mark the grade tracker</h3>
                <p>a grade-tracking application inspired by notion</p>
                <p><em>technologies used: mongodb, mongoose, express.js, react, node.js</em></p>
            </>
        ),
        image: (
            <img className='projectDemo' src={markdemo} alt='Project Demo' />
        ),
    },
    {
        description: (
            <>
                <h3>feliciabot</h3>
                <p>a discord bot study buddy/assistant that handles translations, wikipedia searches, dictionary/thesaurus lookups, and to-do lists</p>
                <p><em>technologies used: mongodb, discord.js, node.js</em></p>
            </>
        ),
        image: (
            <img className='projectDemo' src={feliciabotdemo} alt='Project Demo' />
        ),
    },
];

export default projects;
