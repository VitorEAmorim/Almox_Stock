import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import './header.css';


function Header () {
    return (
        <header>
            <div>
                <div className='title'>
                    <Link to={"/"}><img src = {Logo} className='logo'/></Link>
                </div>
                <div>                    
                    <ul className='container'>
                        <Link to={"/home"}><div className='link'><li>Catálogo</li></div></Link>
                        <Link to={"/Contato"}><div className='link'><li>Contato</li></div></Link>
                        <Link to={"/Sobre"}><div className='link'><li>Sobre</li></div></Link>
                    </ul>
                </div>
            </div>        
        </header>
    )
}

export default Header