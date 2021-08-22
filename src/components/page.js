import React from 'react';

const Page = ({ title, body }) => {
    return (
        <div class='page'>
            <h1>{title}</h1>
            {body}
        </div>
    );
};

export default Page;