import './App.css';
import Data from "./Data.json";
import { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";
import Modal from './Modal';
import './Sunwish-Maverick.otf';
import './grainy-gradients.jpg';
import stars from './square-three.png';

const App = () => {

  const [quotes, setQuotes] = useState(Data);
  const [click, setClick] = useState(false);

  const primaryTypes = [...new Set(Data.map((Val) => Val.type))];
  const menuTypes = primaryTypes.filter(newVal => newVal.length > 4);

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

  const [isModalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>

      <Modal isModalVisible={isModalVisible} toggleModal={toggleModal}></Modal>

      <div className='ban-box'>
        <h1 className='title'>MMMATCH</h1>
        <img src={stars} className="stars" onClick={toggleModal} />
      </div>

      <div className='box'>
        {click ?
          <Display quotes={quotes} setClick={setClick} />
          :
          <Buttons
            filterQuotes={filterQuotes}
            setQuotes={setQuotes}
            menuTypes={menuTypes}
            setClick={setClick}
          />}
      </div>

    </>
  );
};

export default App;
