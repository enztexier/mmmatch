import React from 'react';

const Display = ({quotes}) => {
    return (
        <div>
            {quotes.map((Val) => {
            return (
                <h1 key={Val.id}>{Val.quote}</h1>
            );
          })}
        </div>
    );
};

export default Display;