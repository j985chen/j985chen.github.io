import React from 'react';

const Page = ({ title, body, zIndex, isFlipped }) => {
    return (
        <div style={{zIndex}} className={`page${isFlipped ? ' flipped' : ''}`}>
            <div className='front'>
                <div className='content'>
                    <h1>{title}</h1>
                    {body}
                </div>
            </div>
            <div className='back'></div>
        </div>
    );
};

export default Page;