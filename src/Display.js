import React, { useState } from 'react';

const Display = ({quotes, setClick}) => {

    const arrayHistory = [];
    let indexRandom = 0;
    let indexArray = 0;
    const [Single, setSingle] = useState("yooooo");

    let randomNumber = (max) => {
        return Math.floor(Math.random() * max);
    }

    function nextQuote() {

        
        console.log(arrayHistory.length);

        if(!arrayHistory.length){
            indexRandom = randomNumber(quotes.length);
            console.log("1:" + indexRandom);
            arrayHistory.push(quotes[indexRandom]);
            setSingle(arrayHistory[0]);
            //document.getElementById("dos").innerHTML = arrayHistory[0];
          }
        
          else if(quotes.length === arrayHistory.length && indexArray === (quotes.length - 1)){
            indexArray++;
            //document.getElementById("dos").innerHTML = "Finish"
            setSingle("Finish");
            console.log("2:");
          }
        
          else if(arrayHistory.length === (indexArray + 1)){
        
            indexRandom = randomNumber(quotes.length);
            console.log("3:");
        
            do{
              indexRandom = randomNumber(quotes.length);
            }
            while(arrayHistory.includes(quotes[indexRandom]))
        
            arrayHistory.push(quotes[indexRandom]);
            indexArray = arrayHistory.length - 1;
            setSingle(arrayHistory[indexArray]);
            //document.getElementById("dos").innerHTML = arrayHistory[indexArray];
          }
        
          else if (indexArray < quotes.length) {
            indexArray++;
            console.log("4:");
            setSingle(arrayHistory[indexArray]);
            //document.getElementById("dos").innerHTML = arrayHistory[indexArray];
          }

    }

    let prevQuote = () => {

        if(indexArray > 0){
            indexArray--;
            setSingle(arrayHistory[indexArray]);
           // document.getElementById("dos").innerHTML = arrayHistory[indexArray];
          }
        
          else if (indexArray === 0) {
            indexArray--;
            setSingle("Start");
           // document.getElementById("dos").innerHTML = "Start";
          }

    }

    return (
        <div>

            <button onClick={() => setClick(false)}>BACK</button>
            <button onClick={() => prevQuote()}>prev</button>
            <button onClick={() => nextQuote()}>next</button>
            <h1 key={Single.id}>{Single.quote}</h1>
            {quotes.map((Val) => {
            return (
                <h1 key={Val.id}>{Val.quote}</h1>
            );
          })}
        </div>
    );
};

export default Display;