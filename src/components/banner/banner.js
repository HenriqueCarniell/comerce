import React, { useState, useEffect } from 'react';
import baner1 from "./img/baner1.jpg";
import baner2 from "./img/baner2.jpg";
import baner3 from "./img/baner3.jpg";
import "./baner.css";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

function Banner() {
    const [indice, setIndice] = useState(0);
    const banners = [baner1, baner2, baner3];

    function Avançar() {
        setIndice((indice + 1) % banners.length);
    }

    function Voltar() {
        setIndice((indice - 1 + banners.length) % banners.length);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            Avançar()
        }, 8000); // 5000ms = 5 segundos
    }, [banners]);

    return (
        <div id="container">
            <div id="bannersContainer">
                <div id="banners">
                    <img src={banners[indice]} alt=""></img>
                </div>
            </div>
            <div id="voltarDiv">
                <button id="voltar" onClick={Voltar}> <AiOutlineArrowLeft /></button>
            </div>
            <div id="avancarDiv">
                <button id="avançar" onClick={Avançar}>  <AiOutlineArrowRight /></button>
            </div>
        </div>
    );
}

export default Banner;
