import logo__foot  from '../../assets/logo_foot.png'
import { social } from '../../utils/constants';
import './footer.css';

const Footer = () => {
    return (
        <footer className="foot">
            <div className="container_enterprise">
                <ul className="enterprise">
                    <li>
                        {/* <a href="#">Aviso de Privacidad</a> */}
                    </li>
                    <li>
                        {/* <a href="#">Unirse a Paqueteria 5 Estrellas</a> */}
                    </li>
                </ul>
            </div>
            <div className="container">
                <div className="body_foot">
                    <div className='foot_brand'>
                        <img src={logo__foot} alt="Paqueteria_5_estrellas_logo"  width="100%" height="auto"/>
                    </div>
                    <ul className='foot_links'>
                        <li>
                            <span><i className="fa-solid fa-phone"></i></span>
                            <a href="tel:663 221 9250">663 221 9250 </a>
                            <span>ó</span>
                            <a href="tel:664 130 3694">664 130 3694</a>
                        </li>
                        <li>
                            <a href="mailto: contacto@paqueteria5estrellas.com"><i className="fa-solid fa-envelope"></i>contacto@paqueteria5estrellas.com</a>
                        </li>
                        <li>
                            <a href={social.whatsapp}><i className="fa-brands fa-whatsapp"></i>Envíanos un mensaje</a>
                        </li>
                    </ul>
                    <p>Todos los derechos reservados &copy; 2023 Paqueteria 5 Estrellas S.A de C.V, La escondida, 22106 Tijuana, Baja California, Mexico</p>
                </div>
                <small className='meshdev'>
                    Made with
                    <span>❤️</span>
                    by
                    <a href="https://meshdev.tech/" target='_blank' rel='noreferrer'>
                        MeshDev
                    </a>
                </small>
            </div>
        </footer>
    );
};

export default Footer;