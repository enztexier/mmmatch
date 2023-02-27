import './App.css';
import Data from "./Data.json";
import { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";

const App = () => {

  const [quotes, setQuotes] = useState(Data);
  const [click, setClick] = useState(false);

  const menuTypes = [...new Set(Data.map((Val) => Val.type))];

  const filterQuotes = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.type === curcat;
    });
    setQuotes(newItem);
    setClick(true);
  };

  return (
    <>

    <h1>MMMATCH</h1>

    <div className='box'>
    {click ?  <Display quotes={quotes} setClick={setClick} /> : 
        <Buttons
            filterQuotes={filterQuotes}
            setQuotes={setQuotes}
            menuTypes={menuTypes} 
            setClick={setClick}
          /> }
    </div>
    
    </>
  );
};

export default App;
