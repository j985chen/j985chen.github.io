import React, { useEffect, useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAngleLeft, faAngleRight, faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';

import './App.css';

import Tabs from './components/tabs';
import About from './components/about';
import Projects from './components/projects';
import Photos from './components/photos';

library.add(faAngleLeft, faAngleRight, faEnvelope, faFileAlt, fab);

const App = () => {
    const currentDate = new Date();
    const [time, setTime] = useState(currentDate.getHours());

    const interval = setInterval(() => {
        let newDate = new Date();
        setTime(newDate.getHours());
    }, 60000);

    useEffect(() => {
        if ((0 <= time && time <= 4) || time >= 21) {
            document.getElementById('root').classList.remove('evening');
            document.getElementById('root').classList.add('night');
        } else if (5 <= time && time <= 10) {
            document.getElementById('root').classList.remove('night');
            document.getElementById('root').classList.add('morning');
        } else if (11 <= time && time <= 17) {
            document.getElementById('root').classList.remove('morning');
            document.getElementById('root').classList.add('daytime');
        } else if (18 <= time && time <= 20) {
            document.getElementById('root').classList.remove('daytime');
            document.getElementById('root').classList.add('evening');
        }
    });

    const setSelectedTab = (tabName) => {
        const tabs = document.getElementsByClassName('tab');
        for (const tab of tabs) {
            const contentId = tab.id.substring(0, tab.id.length - 3);
            tab.classList.remove('selected');
            document.getElementById(`${contentId}Content`).classList.remove('selected');
        }
        document.getElementById(`${tabName}Tab`).classList.add('selected');
        document.getElementById(`${tabName}Content`).classList.add('selected');
    };

    return (
        <div className='filingCabinet'>
            <Tabs onChangeTab={setSelectedTab}/>
            <div className='folders'>
                <About onTabClick={() => setSelectedTab('about')}/>
                <Projects onTabClick={() => setSelectedTab('projects')}/>
                <Photos onTabClick={() => setSelectedTab('photos')}/>
            </div>
        </div>
        
    );
};

export default App;
