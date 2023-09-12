import { Logo_svg } from '../../assets'
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
            <a href='#' className="brand">
                <img src={Logo_svg} alt="brand_logo" />
            </a>
            <ul className="menu">
                <li><a href="#">Conocenos</a></li>
                <li><a href="#">Atencion al Cliente</a></li>
                <li><a href="#">Contactanos</a></li>
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