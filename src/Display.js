import React, { useState, useEffect } from 'react';

const Display = ({quotes, setClick}) => {

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
    },[]);

    function nextQuote() {
    
          if(quotes.length === history.length && quotes.length === (indexArray)){
            setIndexArray(indexArray + 1);
            history.push({quote:"finish"});
            setSingle(history[indexArray]);
          }
    
          else if(history.length === (indexArray)){
        
            indexRandom = randomNumber(quotes.length);
        
            do{
              indexRandom = randomNumber(quotes.length);
            }
            while(history.includes(quotes[indexRandom]))
        
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

        if(indexArray > 1){
          console.log("prevINDEX: " + indexArray);
          //console.log(history[indexArray - 2]);
            setSingle(history[indexArray - 2]);
            setIndexArray(indexArray - 1);
           // document.getElementById("dos").innerHTML = arrayHistory[indexArray];
          }
  
          else if (indexArray === 1) {
            //indexArray--;
            console.log("prevARRAY0: ");
            //setSingle("Start");
           // document.getElementById("dos").innerHTML = "Start";
          }

    }

    console.log("iindexArray: " + indexArray);
    console.log("h " + history.length);

    return (
        <div>

            <button onClick={() => setClick(false)}>BACK</button>
          
            <button onClick={() => prevQuote()}>prev</button>
            <button onClick={() => nextQuote()}>next</button>
            <h1 key={single.id}>{single.quote}</h1>

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


                  if(!history.length){
            indexRandom = randomNumber(quotes.length);
            console.log("1:" + indexRandom);
            let addHistory = quotes[indexRandom];
            console.log("just add: " + addHistory);
            history.push(quotes[indexRandom]);
            console.log("tableau: " + history[0]);
            setSingle(history[0]);
            //setIndexArray(indexArray + 1);
            console.log("indexArray: " + indexArray);
            console.log("history: " + history.length);
          }

          */