
import React from 'react';
import styles from "./footer.module.css"
import tg from "./images/tg.svg"


const template_footer = () => {

    return (
        <>
        <div className={styles.footer_logo}><img src="http://new.itizkoys.beget.tech/include/logo-2023-2.webp"/></div>
           <div className={styles.footer_container}  role="contentinfo" itemscope="itemscope" itemtype="https://schema.org/Organization" >
            <div className={styles.footer_column}>
                    <ul >
                        <li className={styles.footer_phone}><a href="tel:88005505447" >8 800 550-54-47</a></li>
                        <li className={styles.footer_title}>Служба поддержки клиентов</li>
                        <li className={styles.footer_tg} ><a href="https://t.me/izkoltsovo_shop" target="_blank" rel="noopener noreferrer" >
                        <img src={tg}/><span>Telegram</span>
                        </a></li>
                        <li className={styles.footer_tg} ><a href="https://t.me/izkoltsovo_shop" target="_blank" rel="noopener noreferrer" >
                        <img src={tg}/><span>Telegram</span>
                        </a></li>
                    </ul>
            </div>

            <div className={styles.footer_menu}>
                <div className={styles.footer_menu_item}>
                    <h3>О НАС</h3>
                    <ul>
                          <li>
                            <a href='#'>политика обработки персональных данных</a>
                            </li>  
                            <li>
                            <a href='#'>документы сайта</a>
                            </li> 
                            <li>
                            <a href='#'>вакансии</a>
                            </li>  
                            <li>
                            <a href='#'>наши магазины</a>
                            </li> 
                            <li>
                            <a href='#'>каталог</a>
                            </li>  
                            <li>
                            <a href='#'>каталог</a>
                            </li> 
                            



                    </ul>
                </div>
                  

                  
            </div>
            <div className={styles.footer_menu}>
                <div className={styles.footer_menu_item}>
                    <h3>КЛИЕНТАМ</h3>
                    <ul>
                          <li>
                            <a href='#'>политика обработки персональных данных</a>
                            </li>  
                            <li>
                            <a href='#'>документы сайта</a>
                            </li> 
                            <li>
                            <a href='#'>вакансии</a>
                            </li>  
                            <li>
                            <a href='#'>наши магазины</a>
                            </li> 
                            <li>
                            <a href='#'>каталог</a>
                            </li>  
                            <li>
                            <a href='#'>каталог</a>
                            </li> 
                            



                    </ul>
                </div>
                  

                  
            </div>
           </div>
        </>
    );
};

export default template_footer;

