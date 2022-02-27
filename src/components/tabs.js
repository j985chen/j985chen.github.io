import React from 'react';

import '../App.css';

const Tabs = ({ onChangeTab }) => {
    return (
        <div className='desktopTabsContainer'>
            <div className='tab selected' id='aboutTab' onClick={() => onChangeTab('about')}>about</div>
            <div className='tab' id='projectsTab' onClick={() => onChangeTab('projects')}>projects</div>
            <div className='tab' id='photosTab' onClick={() => onChangeTab('photos')}>photos</div>
        </div>
    );
};

export default Tabs;