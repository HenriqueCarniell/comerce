import "./divcategoria.css"

function DivCategoria({on,off}) {
    return ( 
        <div id="DivCategoria" onMouseOver={on} onMouseOut={off}>
            <ul id="ulComponentcategoria">
                <li>
                    <a className="aComponentcategoria" href="">Produtos</a>
                </li>
                <li>
                    <a className="aComponentcategoria" href="">Produtos</a>
                </li>
                <li>
                    <a className="aComponentcategoria" href="">Produtos</a>
                </li>
                <li>
                    <a className="aComponentcategoria" href="">Produtos</a>
                </li>
                <li>
                    <a className="aComponentcategoria" href="">Produtos</a>
                </li>
            </ul>
        </div>
     );
}

export default DivCategoria;