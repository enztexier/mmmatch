import './App.css';
import Data from "./Data.json";
import { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";

const App = () => {

  const [quotes, setQuotes] = useState(Data);

  const menuTypes = [...new Set(Data.map((Val) => Val.type))];

  const filterQuotes = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.type === curcat;
    });
    setQuotes(newItem);
  };
  
  return (
    <>

    <h1>MMMATCH</h1>
    <Buttons
            filterQuotes={filterQuotes}
            setQuotes={setQuotes}
            menuTypes={menuTypes}
          />

{filterQuotes.length > 0 && <Display quotes={quotes} /> }

    </>
  );
};

export default App;
