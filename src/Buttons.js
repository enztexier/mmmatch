import React from "react";
import Data from "./Data";
import './Button.css';

const Buttons = ({ filterQuotes, setQuotes, menuTypes, setClick }) => {

    const handleClick = () => {
        setClick(true);
        setQuotes(Data)
    }

  return (
    <>

        {menuTypes.map((Val, id) => {
          return (
            <button className="menu_button"
              onClick={() => filterQuotes(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button className="menu_button"
          onClick={handleClick}
        >
          Everybody
        </button>

    </>
  );
};

export default Buttons;