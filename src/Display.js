import React, { useState } from 'react';

const Display = ({quotes, setClick}) => {

    let indexRandom = 0;
    const [indexArray, setIndexArray] = useState(0);
    const [history, setHistory] = useState([]);
    const [single, setSingle] = useState('yooooo');

    let randomNumber = (max) => {
        return Math.floor(Math.random() * max);
    }

    function nextQuote() {

        
        console.log("history: " + history.length);
        console.log("indexArray: " + indexArray);
        console.log(!history.length);


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
    
          else if(quotes.length === history.length && indexArray === (quotes.length - 1)){
            //indexArray++;
            setSingle("Finish");
            console.log("2:");
          }
    
          else if(history.length === (indexArray + 1)){
        
            indexRandom = randomNumber(quotes.length);
            console.log("3: " + indexRandom);
        
            do{
              indexRandom = randomNumber(quotes.length);
            }
            while(history.includes(quotes[indexRandom]))
        
            console.log("33: " + quotes[indexRandom])
            history.push(quotes[indexRandom]);
            console.log(quotes[indexRandom]);
            setIndexArray(indexArray + 2);
            console.log("in: " + indexArray);
            //setIndexArray(history.length - 1);
            //indexArray = history.length - 1;
            console.log(history.length);
            console.log(history[indexArray]);
            setSingle(history[indexArray]);
            console.log(single);
            //document.getElementById("dos").innerHTML = arrayHistory[indexArray];
          }
        
          else if (indexArray < quotes.length) {
            setIndexArray(indexArray + 1);
            console.log(indexArray);
            console.log(history);
            console.log("4: " + history[indexArray]);
            setSingle(history[indexArray]);
            //document.getElementById("dos").innerHTML = arrayHistory[indexArray];
          }

    }

    let prevQuote = () => {

        if(indexArray > 0){
            //indexArray--;
            setSingle(history[indexArray]);
           // document.getElementById("dos").innerHTML = arrayHistory[indexArray];
          }
        
          else if (indexArray === 0) {
            //indexArray--;
            setSingle("Start");
           // document.getElementById("dos").innerHTML = "Start";
          }

    }

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

          */