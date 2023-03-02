import './App.css';
import Data from "./Data.json";
import { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";

const App = () => {

  const [quotes, setQuotes] = useState(Data);
  const [click, setClick] = useState(false);

  const primaryTypes = [...new Set(Data.map((Val) => Val.type))];
  console.log(primaryTypes);
  const menuTypes = primaryTypes.filter(newVal => newVal.length > 4);
  console.log(menuTypes);

  const filterQuotes = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.type === curcat;
    });
    const allItem = Data.filter((newVal) => {
      return newVal.type === "ALL";
    });

    const concatQuotes = newItem.concat(allItem);
    setQuotes(concatQuotes);
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
