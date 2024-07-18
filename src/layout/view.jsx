import React, { useState } from 'react';
import styles from './view.module.css';
import Template_footer from "./footer";
import Menu from './Menu/menu';
import Slider from "../components/slider"

const View = () => {
    const [menu, setMenu]=useState();
    const MenuClick=()=>{

    }
    return (
       
    <div class={styles.wrapper}> 
        <Menu/>
        
        <main class={styles.page}>
            <Slider/>
        </main>
        

        <footer class={styles.footer}>
            <Template_footer/>
        </footer>
    </div>

     
    );
};

export default View;