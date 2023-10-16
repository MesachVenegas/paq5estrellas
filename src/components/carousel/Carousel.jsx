/* eslint-disable react/prop-types */
import { useState } from 'react';
import './style.css';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex(prevIndex =>
            prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
    }

    const handleNext = () => {
        setCurrentIndex(prevIndex =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    }

    return (
        <section className="carousel">
            <div className="carousel-images">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        className={currentIndex === index ? "active" : "inactive"}
                        alt='carrusel_aviso'
                    />
                ))
                }
            </div>
            <div className="carousel-controls">
                <button className='left-btn' onClick={handlePrevious}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className='right-btn' onClick={handleNext}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
            <div className="carousel-dots">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${currentIndex === index ? "active" : ""}`}
                    >
                    </div>
                ))
                }
            </div>
        </section>
    );
};

export default Carousel;