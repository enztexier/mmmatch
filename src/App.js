import './App.css';
import Data from "./assets/data/Data.json";
import { useState } from "react";
import Buttons from "./components/button/Buttons";
import Display from "./components/display/Display";
import Modal from './components/modal/Modal';
import './assets/fonts/Sunwish-Maverick.otf';
import './assets/img/grainy-gradients.jpg';
import stars from './assets/img/square-three.png';

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
