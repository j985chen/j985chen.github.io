import React, { useState } from 'react';
import pages from '../data/data';
import Page from './page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Book = () => {
    const [currPage, setCurrPage] = useState(0);

    const flipLeft = () => {
        setCurrPage(currPage - 1);
    };

    const flipRight = () => {
        setCurrPage(currPage + 1);
    };

    const pageComponents = pages.map((value, index) => {
        return <Page 
                title={value.title} 
                body={value.body} 
                key={index} 
                zIndex={`${pages.length - index}`} 
                isFlipped={index < currPage ? true : false}/>
    });

    return (
        <>
            <button id='prevButton' onClick={flipLeft} style={{ visibility: currPage === 0 ? 'hidden' : 'visible' }}>
                <FontAwesomeIcon icon='angle-left' />
            </button>
            <div className='bookBinding'>
                <div className='book'>
                    {pageComponents}
                </div>
                <div className='spine'></div>
                <div className='bookmark'></div>
            </div>
            <button id='nextButton' onClick={flipRight} style={{visibility: currPage === pages.length - 1 ? 'hidden' : 'visible' }}>
                <FontAwesomeIcon icon='angle-right' />
            </button>
        </>
    );
};

export default Book;