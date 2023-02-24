import React from "react";
import Data from "./Data";

const Buttons = ({ filterQuotes, setQuotes, menuTypes, setClick }) => {

    const handleClick = () => {
        setClick(true);
        setQuotes(Data)
    }

  return (
    <>

        {menuTypes.map((Val, id) => {
          return (
            <button
              onClick={() => filterQuotes(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button
          onClick={handleClick}
        >
          +
        </button>

    </>
  );
};

export default Buttons;