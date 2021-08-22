import React from 'react';
import Page from './page';

const Sheet = ({ front, back }) => {
    return (
        <div class='sheet'>
            <Page type='front' title={front.title} body={front.body} />
            <Page type='back' title={back.title} body={back.body} />
        </div>
    );
};

export default Sheet;