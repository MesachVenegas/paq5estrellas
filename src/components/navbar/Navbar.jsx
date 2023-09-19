import { Logo_svg } from '../../assets'
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
            <Link to="/" className="brand">
                <img src={Logo_svg} alt="brand_logo" />
            </Link>
            <ul className="menu">
                <li><Link to="/About">Conocenos</Link></li>
                <li><Link to="/Clients">Atencion al Cliente</Link></li>
                <li><Link to="/Contact">Contactanos</Link></li>
            </ul>
            <div className="menu_btn" onClick={handleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar;