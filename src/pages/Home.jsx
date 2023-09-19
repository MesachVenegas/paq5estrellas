import { Carousel } from '../components/Index';
import { slider1, slider3, slider4, slider5 } from '../assets';

const Home = () => {
    const imgs = [slider1, slider3, slider4, slider5];
    return (
        <>
            <Carousel images={imgs} />
        </>
    );
};

export default Home;