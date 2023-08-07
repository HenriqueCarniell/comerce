import React, { useState } from 'react';
import "./menu.css"
import { IoLocationOutline } from 'react-icons/io5';
import { BsArrowDownShort } from 'react-icons/bs';
import DivCategoria from '../categoria/divcategoria';
import { RiAccountCircleLine } from 'react-icons/ri';

function Menu() {
    const [showCategoria, setShowCategoria] = useState(false);

    function handleMouseOver() {
        setShowCategoria(true);
    }
    function handleMouseOut() {
        setShowCategoria(false);
    }
    return (
        <header id="navbar">
            <div id="logo">
                <h1>Logo</h1>
                <p>
                    <a className='aComponentMenu' href=''>selecione o endereço <IoLocationOutline /></a>
                </p>
            </div>
            <div id="input">
                <input type="text"></input>
            </div>
            <div id="itens">
                <ul id='ulComponentMenu'>
                    <li>
                       <a className='aComponentMenu' href='/login'><i><RiAccountCircleLine/></i>Iniciar sessão</a>
                    </li>
                    <div>
                        <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                            <a className='aComponentMenu' href=''>Categorias<i><BsArrowDownShort /></i></a>
                        </li>
                        {showCategoria && <DivCategoria on={handleMouseOver} off={handleMouseOut}/>}
                    </div>
                    <li>
                        <a className='aComponentMenu' href=''>Carrinho</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Menu;
