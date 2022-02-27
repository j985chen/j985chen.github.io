import React from 'react';

import Project from './project';

import projects from '../data/projects';

import '../App.css';

const Projects = () => {
    return (
        <div className='folder' id='projectsFolder'>
            <div className='mobileTab'>projects</div>
            <div className='content' id='projectsContent'>
                <Project data={projects[0]} />
                <Project data={projects[1]} />
                <Project data={projects[2]} />
            </div>
        </div>
    );
};

export default Projects;
