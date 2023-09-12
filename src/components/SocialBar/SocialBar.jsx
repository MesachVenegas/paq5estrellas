import './style.css'

const SocialBar = () => {
    return (
        <div className="info_bar">
            <div className="social_container">
                <a href="#" target="_blank" className="social_item">
                    <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" target="_blank" className="social_item">
                    <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a href="#" target="_blank" className="social_item">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" target="_blank" className="social_item">
                    <i className="fa-brands fa-tiktok"></i>
                </a>
            </div>
            <div className="search_container">
                <input type="text"  className="search_input" />
                <button className="search_btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>
    );
};

export default SocialBar;