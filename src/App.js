import './App.css';
import quotes from "./quotes.json";
import { useEffect, useState } from "react";

const App = () => {

  const [data, setData] = useState(quotes);
  const [gender, setGender] = useState();

  const everybodyClick = () => {
    setData(quotes);
    console.log(data);
  }

  const herClick = () => {
    setGender("f");
    const resultFilter = quotes.filter(genderfilter => { return genderfilter.type === gender});
    setData(resultFilter);
    console.log(gender);
    console.log(resultFilter);
  };

  const himClick = gender => {
    setGender("m");
    const resultFilter = quotes.filter(genderfilter => { return genderfilter.type === gender})
    setData(resultFilter);
    console.log(data);
    console.log(gender);
  };

  const addQuote = gender => {
    const resultFilter = quotes.filter(genderfilter => { return genderfilter.type === gender})
    setData(resultFilter);
    console.log(data);
    console.log(gender);
  };

  //useEffect(() => {
  //  load_quote();
  //}, []);


  return (
    <>

    <h1>MMMATCH</h1>
    <button onClick={() =>  himClick(gender)}>pour Homme</button>
    <button onClick={() =>  herClick(gender)}>pour Femme</button>
    <button onClick={() =>  everybodyClick()}>everybody</button>
    <button onClick={() => addQuote(gender)}>+</button>
    <h1>{data.quote}</h1>

    </>
  );
};

export default App;
