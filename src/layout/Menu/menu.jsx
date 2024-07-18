import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import styles from '../view.module.css';
import "./menu.css";
const CustomBurgerIcon = () => <img src="" />;

const MenuHeader = () => {
    return (
        <>
        <header class={styles.header}>
      
      <div class={styles.header_container}>
                  <nav class={styles.header_menu}>

                      <ul class={styles.menu_list}>
                      <li class={styles.menu_item}>
                              <a href="#" class={styles.menu_}>ОБО МНЕ</a>
                          </li>
                          <li class={styles.menu_item}>
                              <a href="#" class={styles.menu_}>ПОРТФОЛИО</a>
                          </li>
                          <li class={styles.menu_item}>
                              <a href="#" class={styles.menu_}>ТАРИФЫ</a>
                          </li>
                          <li class={styles.menu_item}>
                              <a href="#" class={styles.menu_}>ОТЗЫВЫ</a>
                          </li>
                          <li class={styles.menu_item}>
                              <a href="#" class={styles.menu_}>КОНТАКТЫ</a>
                          </li>
                        
                      </ul>
                  </nav>
                  
      </div>
      <div className={styles.burger}>
      
      
  <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/about">
        About
      </a>

      <a className="menu-item" href="/services">
        Services
      </a>

      <a className="menu-item" href="/contact">
        Contact us
      </a>
    </Menu></div> </header>
    
        </>
    );
};

export default MenuHeader;