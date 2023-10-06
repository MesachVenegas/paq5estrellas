import Logo_svg  from '../../assets/Logo.svg';
import { Link } from 'react-router-dom';
import './style.css'

const Navbar = () => {

    const handleMenu = () => {
        let menu_btn  = document.querySelector('.menu_btn');
        const menu = document.querySelector('.menu');
        menu_btn.classList.toggle('open');
        menu.classList.toggle('open');
    }

    return (
        <nav>
            <div className="nav_container">
                <Link to="/" className="brand">
                    <img src={Logo_svg} alt="brand_logo" />
                </Link>
                <ul className="menu">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/about">Servicios</Link></li>
                    <li><Link to="/about">Sobre Nosotros</Link></li>
                    <li><Link to="/contact">Contactanos</Link></li>
                </ul>
                <div className="menu_btn" onClick={handleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;