import React from 'react';

const Project = ({ data }) => {
    return (
        <div className='project'>
            {data.image}
            <div className='projectDescription'>{data.description}</div>
        </div>
    );
};

export default Project;