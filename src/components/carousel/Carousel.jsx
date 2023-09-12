import { layer1 } from '../../assets';
import './style.css';

const Carousel = () => {
    return (
        <div className="slide_container">
            <img src={layer1} alt="slide_1" />
        </div>
    );
};

export default Carousel;