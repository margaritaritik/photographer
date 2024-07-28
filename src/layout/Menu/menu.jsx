import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import styles from '../view.module.css';
import "./menu.css";
import { Link, Element } from 'react-scroll';
const CustomBurgerIcon = () => <img src="" />;

const MenuHeader = () => {
    return (
        <>
        <header class={styles.header}>
      
      <div class={styles.header_container}>
                  <nav class={styles.header_menu}>
                      <ul class={styles.menu_list}>     
                        <li><Link activeClass="active" to="me" spy={true} smooth={true} offset={-50} duration={500}>ОБО МНЕ</Link></li>
                        <li><Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-50} duration={500}>ПОРТФОЛИО</Link></li>             
                        <li><Link activeClass="active" to="tarif" spy={true} smooth={true} offset={-50} duration={500}>ТАРИФЫ</Link></li>
                        <li><Link activeClass="active" to="otzav" spy={true} smooth={true} offset={-50} duration={500}>ОТЗЫВЫ</Link></li>
                        <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500}>КОНТАКТЫ</Link></li>  
                      </ul>
                  </nav>
                  
      </div>
      <div className={styles.burger}>
      
      
  <Menu>
     
                        <a href='#me' id="react-burger-cross-btn">ОБО МНЕ</a>
                        <a href='#me'>ПОРТФОЛИО</a>             
                        <a href='#me'>ТАРИФЫ</a>
                        <a href='#me'>ОТЗЫВЫ</a>
                        <a href='#me'>КОНТАКТЫ</a>  
                      
    </Menu></div> </header>
    
        </>
    );
};

export default MenuHeader;