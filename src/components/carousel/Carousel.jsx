/* eslint-disable react/prop-types */
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function ControlledCarousel({ images }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <section className='carousel'>
            <Carousel
                className='carousel-images'
                activeIndex={index}
                onSelect={handleSelect}
            >
                {
                    images.map( (img, index) => (
                        <Carousel.Item key={`img-${index}`} >
                            <img
                                key={index}
                                className="img_item"
                                src={img}
                                width="100%"
                                height="100%"
                                alt={`${index}-slide`}
                            />
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </section>
    );
}

export default ControlledCarousel;