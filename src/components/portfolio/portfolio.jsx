import React, { useState, useEffect } from 'react';
import styles from './portfolio.module.css';

const Portfolio = () => {
    const FILTER_VARIANTS = {
        ALL: "ALL",
        MADE: "MADE",
        NOT_MADE: "NOT_MADE"
    }
   const [menuActive, setMenuActive]=useState([{id:1,name:"Все",status:false},{id:2,name:"Портреты",status:false},{id:3,name:"Предметы",status:false},{id:4,name:"Мероприятия",status:false}]);
   const [menuActive1, setMenuActive1]=useState(FILTER_VARIANTS.ALL);
   const [menuStyle1, setMenuStyle1]=useState(styles.true_);
   const [menuStyle2, setMenuStyle2]=useState(styles.false_);
   const [menuStyle3, setMenuStyle3]=useState(styles.false_);
   const ChangeStyle = (value) => {
    
}
useEffect(() => {
    if(menuActive1==="ALL"){
        setMenuStyle1(styles.true_);
        setMenuStyle2(styles.false_);
        setMenuStyle3(styles.false_);
    }
   
    if(menuActive1==="MADE"){
        setMenuStyle1(styles.false_);
        setMenuStyle2(styles.true_);
        setMenuStyle3(styles.false_);
    }
    
    if(menuActive1==="NOT_MADE"){
        setMenuStyle1(styles.false_);
        setMenuStyle2(styles.false_);
        setMenuStyle3(styles.true_);
    }
  }, [menuActive1]);
   

    
   
   return (
    <>
        <div className={styles.menu}>
            <ul className={styles.menu_list}>
            <li><a onClick={()=>{setMenuActive1(FILTER_VARIANTS.ALL)}} className={menuStyle1}>Все</a></li>
            <li><a onClick={()=>{setMenuActive1(FILTER_VARIANTS.MADE)}} className={menuStyle2}>Портреты</a></li>
            <li><a onClick={()=>{setMenuActive1(FILTER_VARIANTS.NOT_MADE)}} className={menuStyle3}>Мероприятия</a></li>
            </ul>
            
        </div>
        <div className={styles.container_photos}>
        {/* {getFiltered().map((post) =>
    <li onClick={() => {
        setFilterValue(FILTER_VARIANTS.MADE)
    }} className={post.id===1?styles.menu_item1:styles.menu_item}>{post.name}</li>
  )} */}
        </div>
    </>
    );
};

export default Portfolio;