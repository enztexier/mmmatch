import React from 'react';

const Modal = ({isModalVisible, toggleModal}) => {
    console.log(isModalVisible);
    return (

        <div>
                {isModalVisible === true && <div> <p>MODAL</p> <button onClick={toggleModal}>close</button> </div>}

        </div>
    );
};

export default Modal;