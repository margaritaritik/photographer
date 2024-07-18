import React, { useState, useEffect } from 'react';
import styles from './slider.module.css';
import img1 from './slider images/ecf44797-a93f-48b1-bd3d-52085c71b82f.png'
import img2 from "./slider images/fd31a755-5498-4b43-ae96-37bc47fa37c2.png"

const Slider = () => {
    const images=[img1,img2];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }, [images.length]);
    return (
       
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

     
    );
};

export default Slider;