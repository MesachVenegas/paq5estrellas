import './style.css'
import { social } from './../../utils/constants';

const SocialBar = () => {
    return (
        <div className="info_bar">
            <div className="social_container">
                <a href={social.facebook} target="_blank" rel="noreferrer" >
                    <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href={social.whatsapp} target="_blank" rel='noreferrer' >
                    <i className="fa-brands fa-whatsapp"></i>
                </a>
                {/* <a href="#" target="_blank" rel='noreferrer' >
                    <i className="fa-brands fa-instagram"></i>
                </a> */}
                <a href={social.tiktok} target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-tiktok"></i>
                </a>
            </div>
            <div className="search_container">
                <input type="text"  className="search_input" placeholder='rastrear mi pedido...'/>
                <button className="search_btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>
    );
};

export default SocialBar;