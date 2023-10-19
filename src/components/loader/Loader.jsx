import loading from '../../assets/build-lego.gif';
import './load.css'

const Loader = () => {
    return (
        <div className='loading_container'>
            <figure>
                <img src={loading} alt="loading_image" />
            </figure>
        </div>
    );
};

export default Loader;