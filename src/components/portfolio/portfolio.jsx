import React, { useState, useEffect } from 'react';
import styles from './portfolio.module.css';
import img1 from './images/beautiful-black-and-white-minimal-design.jpg';
import img2 from './images/medium-shot-young-model-posing-with-hat.jpg'
import img3 from './images/portrait-of-beautiful-fashion-stylish-brunette-woman-model-with-evening-makeup-and-red-lips-in-white-jacket.jpg'
import Modal from './modal'

const Portfolio = () => {
    const FILTER_VARIANTS = {
        ALL: "ALL",
        MADE: "MADE",
        NOT_MADE: "NOT_MADE"
    }
   const [menuActive, setMenuActive]=useState([{id:1,name:"Тематические",status:false},{id:2,name:"Портреты",status:false},{id:3,name:"Предметы",status:false},{id:4,name:"Мероприятия",status:false}]);
   const [menuActive1, setMenuActive1]=useState(FILTER_VARIANTS.ALL);
   const [menuStyle1, setMenuStyle1]=useState(styles.true_);
   const [menuStyle2, setMenuStyle2]=useState(styles.false_);
   const [menuStyle3, setMenuStyle3]=useState(styles.false_);
   const images=[img1,img2,img3];
   const [arr_portfolio, setArr_portfolio]=useState();
   const [isOpen, setIsOpen] = useState(false);
   const [imageSrc, setImageSrc] = useState('');
   const openModal = (src) => {
    setImageSrc(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setImageSrc('');
  };

useEffect(() => {
    if(menuActive1==="ALL"){
        setMenuStyle1(styles.true_);
        setMenuStyle2(styles.false_);
        setMenuStyle3(styles.false_);
        setArr_portfolio(images.map((image, index) => (
            <img
              key={index}
              src={image}
              onClick={() => openModal(image)}
             
        
              className={styles.photos_all}
            />
          )))
    }
   
    if(menuActive1==="MADE"){
        setMenuStyle1(styles.false_);
        setMenuStyle2(styles.true_);
        setMenuStyle3(styles.false_);
        setArr_portfolio(images.map((image, index) => (
            <img
              key={index}
              src={image}
             
              className={styles.photos_made}
            />
          )))
    }
    
    if(menuActive1==="NOT_MADE"){
        setMenuStyle1(styles.false_);
        setMenuStyle2(styles.false_);
        setMenuStyle3(styles.true_);
        setArr_portfolio(images.map((image, index) => (
            <img
              key={index}
              src={image}
             
              className={styles.photos_not}
            />
          )))
    }
  }, [menuActive1]);
   

    
   
   return (
    <>
        <div className={styles.menu}>
            <ul className={styles.menu_list}>
            <li><a onClick={()=>{setMenuActive1(FILTER_VARIANTS.ALL)}} className={menuStyle1}>Тематические</a></li>
            <li><a onClick={()=>{setMenuActive1(FILTER_VARIANTS.MADE)}} className={menuStyle2}>Портреты</a></li>
            <li><a onClick={()=>{setMenuActive1(FILTER_VARIANTS.NOT_MADE)}} className={menuStyle3}>Мероприятия</a></li>
            </ul>
            
        </div>
        <div className={styles.container_photos}>
        {arr_portfolio}
        <Modal isOpen={isOpen} onClose={closeModal} imageSrc={imageSrc} />
        </div>
    </>
    );
};

export default Portfolio;