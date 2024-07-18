import React, { useState } from 'react';
import styles from './view.module.css';
import Template_footer from "./footer";
import Menu from './Menu/menu';
import Slider from "../components/slider"
import { Link, Element } from 'react-scroll';

const View = () => {
    const [menu, setMenu]=useState();
    const MenuClick=()=>{

    }
    return (
       
    <div class={styles.wrapper}> 
        <Menu/>
        
        <main class={styles.page}>
            <Slider/>
            <div id="portfolio" className={styles.portfolio}>
                <h2><a href="#portfolio">Портфолио</a></h2>
            </div>
            <div id="tarif" className={styles.tarif}>
                <h2>Тарифы</h2>
            </div>
            <div id="me" className={styles.me}>
                <h2 >Обо мне</h2>
            </div>
            <div id="otzav"className={styles.otzav}>
                <h2>Отзывы</h2>
            </div>
        </main>
        

        <footer class={styles.footer}>
            <Template_footer/>
        </footer>
    </div>

     
    );
};

export default View;