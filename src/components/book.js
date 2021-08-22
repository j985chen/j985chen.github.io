import React, { useState } from 'react';
import pages from '../data/data';
import Sheet from './sheet';

const Book = () => {
    const sheets = pages.map((value) => {
        return (<Sheet front={value.front} back={value.back} />);
    });
    return (
        <>{sheets}</>
    );
};

export default Book;