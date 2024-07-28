import React, { useState, useEffect } from 'react';
import styles from './slider.module.css';
import img1 from './slider images/black-white-portrait-woman-with-clapperboard-old-hollywood-glamour-style.jpg'
import img2 from "./slider images/black-white-portrait-beautiful-woman-posing-indoors-dress.jpg"
import img3 from "./slider images/beautiful-elegant-background-dark-plants.jpg"

const Slider = () => {
    const images=[img1,img2,img3];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }, [images.length]);
    return (
       <div>
        <div style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
         
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: index === currentSlide ? 'static' : 'absolute',
            left: index === currentSlide ? 0 : '-100%',
            transition: 'left 1s ease',
          }}
        />
      ))}
    </div>
    <div className={styles.main_title}>
      <h1>Фотографии, которые говорят больше, чем слова!</h1>
    </div>
    </div>

     
    );
};

export default Slider;