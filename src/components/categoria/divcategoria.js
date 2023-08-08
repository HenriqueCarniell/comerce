import "./divcategoria.css"

function DivCategoria({on,off}) {
    return ( 
        <div id="DivCategoria" onMouseOver={on} onMouseOut={off}>
            <ul id="ulComponentcategoria">
                <li>
                    <a className="aComponentcategoria" href="">Laticínios </a>
                </li>
                <li>
                    <a className="aComponentcategoria" href="">Congelados </a>
                </li>
                <li>
                    <a className="aComponentcategoria" href="">Frutas e Vegetais</a>
                </li>
                <li>
                    <a className="aComponentcategoria" href="">Higiene Pessoal</a>
                </li>
                <li>
                    <a className="aComponentcategoria" href="">Limpeza Doméstica</a>
                </li>
                <li>
                    <a className="aComponentcategoria" href="">Bebidas</a>
                </li>
                <li>
                    <a className="aComponentcategoria" href="">Produtos para Bebês</a>
                </li>
                <li>
                    <a className="aComponentcategoria" href="">Produtos de Cuidado <br />para Animais <br/> de Estimação</a>
                </li>
            </ul>
        </div>
     );
}

export default DivCategoria;