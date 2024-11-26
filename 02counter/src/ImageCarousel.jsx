import React, { useState } from 'react';
import './ImageCarousel.css'; // Import the CSS file

const images = [
    'https://cdn.pixabay.com/photo/2019/02/24/15/09/wood-doll-4017774_640.jpg',
    'https://cdn.pixabay.com/photo/2019/02/24/15/09/wood-doll-4017774_640.jpg',
    'https://cdn.pixabay.com/photo/2019/02/24/15/09/wood-doll-4017774_640.jpg',
    'https://cdn.pixabay.com/photo/2019/02/24/15/09/wood-doll-4017774_640.jpg',
];

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel-container">
            <img src={images[currentIndex]} alt={`Carousel ${currentIndex + 1}`} className="carousel-image" />
            <div className="carousel-controls">
                <button onClick={prevImage} className="carousel-button">Previous</button>
                <button onClick={nextImage} className="carousel-button">Next</button>
            </div>
        </div>
    );
};

export default ImageCarousel;