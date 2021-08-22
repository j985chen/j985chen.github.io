import React, { useState } from 'react';
import sheets from '../data/data';
import Sheet from './sheet';

const Book = () => {
    const sheetComponents = sheets.map((value) => {
        return (<Sheet front={value.front} back={value.back} />);
    });
    return (
        <>{sheetComponents}</>
    );
};

export default Book;