import React from 'react';

const Display = ({quotes, setClick}) => {


    return (
        <div>
            <button onClick={() => setClick(false)}>BACK</button>
            {quotes.map((Val) => {
            return (
                <h1 key={Val.id}>{Val.quote}</h1>
            );
          })}
        </div>
    );
};

export default Display;