import React from 'react';
import { useState, useEffect } from "react";
import './Modal.css';
import '../../assets/fonts/GuyonGazebo-Regular.otf';
import '../../assets/fonts/BlackSemiCondensed.otf';

const Modal = ({ isModalVisible, toggleModal }) => {

    const a = isModalVisible === true ? 'open' : 'close';
    const [showModal, setModalStyle] = useState(a);

    useEffect(() => {
        setModalStyle(a);
    })

    return (

        <div className={showModal}>
            <div className='content-modale'>
                <h6> La bienveillance envers soi-meme et envers les autres est essentielle pour construire des relations saines et positives.
                    <br></br>
                    Je t'encourage a faire ce qui te rend heureux(se) et a respecter les choix et les desirs des autres.
                    <br></br>
                    Je te souhaite tout le bonheur et l'epanouissement que tu mérites.<br></br> PEACE AND LOVE</h6>
                <h3>Participe avec nous</h3>
                <div className='link-discord'>
                    <p>liens du Discord <br></br> DISCORD</p>
                </div>
                <p>
                    Copyright <br></br>
                    Unless otherwise indicated, all material on this website is copyrighted by Moncy.
                    All rights reserved. No part of this website, either text or image may be used for any purpose other than personal use.
                    Reproduction, modification, storage in a retrieval system or retransmission, in any form or by any means, electronic, mechanical or otherwise, for reasons other than personal use, is strictly prohibited without prior written consent.</p>
            </div>
        </div>
    );
};

export default Modal;


/*{isModalVisible === true && <div> <p>MODAL</p> <button onClick={toggleModal}>close</button> </div>}
    setModalStyle(isModalVisible === true ? 'open' : 'close')
    <button onClick={toggleModal}>close</button>
*/