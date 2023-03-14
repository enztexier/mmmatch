import React, { useState, useEffect } from 'react';

const Display = ({ quotes, setClick }) => {

  let indexRandom = 0;
  const [indexArray, setIndexArray] = useState(0);
  const [history, setHistory] = useState([]);
  const [single, setSingle] = useState('yooooo');

  let randomNumber = (max) => {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    indexRandom = randomNumber(quotes.length);
    history.push(quotes[indexRandom]);
    setIndexArray(indexArray + 1);
    setSingle(history[0]);
  }, []);

  function nextQuote() {

    if (quotes.length === history.length && quotes.length === (indexArray)) {
      setIndexArray(indexArray + 1);
    }

    else if (history.length === (indexArray)) {

      indexRandom = randomNumber(quotes.length);

      do {
        indexRandom = randomNumber(quotes.length);
      }
      while (history.includes(quotes[indexRandom]))

      history.push(quotes[indexRandom]);
      setIndexArray(indexArray + 1);
      setSingle(history[indexArray]);
    }

    else if (indexArray < quotes.length) {
      setIndexArray(indexArray + 1);
      setSingle(history[indexArray]);
    }
  }

  let prevQuote = () => {

    if (indexArray > 1) {
      console.log("prevINDEX: " + indexArray);
      setSingle(history[indexArray - 2]);
      setIndexArray(indexArray - 1);
    }

    else if (indexArray === 1) {
      console.log("Start of the List");
    }
  }

  return (
    <div>

      <button onClick={() => setClick(false)}>BACK</button>
      <br></br>
      {indexArray > 1 && <button onClick={() => prevQuote()}>prev</button>}
      {quotes.length === history.length && indexArray > history.length ?
        <h1>FINISH</h1>
        :
        <div>
          <button onClick={() => nextQuote()}>next</button>
          <h1 key={single.id}>{single.quote}</h1>
        </div>
      }

    </div>
  );
};

export default Display;

/*

            {quotes.map((Val) => {
            return (
                <h1 key={Val.id}>{Val.quote}</h1>
            );
          })}

*/