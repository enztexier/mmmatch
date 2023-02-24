import React from "react";
import Data from "./Data";

const Buttons = ({ filterQuotes, setQuotes, menuTypes }) => {
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
          onClick={() => setQuotes(Data)}
        >
          +
        </button>

    </>
  );
};

export default Buttons;