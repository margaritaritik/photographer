import React from 'react';
import styles from './template.module.css'
import logo from './logo2024.svg'

const template = () => {
    return (
        <>
            <div className={styles.container_footer}>
                <div className={styles.logo_footer}>
<img src={logo}/>
                </div>
                <div className={styles.container_columns_footer}>
                    <div>
                    <p>8 800 770 70 21</p>
                    <p>круглосуточный телефон call-центра</p>
                    </div>
                    <div className={styles.footer_cols}>
                        <div className={styles.footer_col}>
                        <h2>о нас</h2>
                            <ul>
                                <li><a href='#'>политика обработки персональных данных</a></li> 
                                <li><a href='#'>документы сайта</a></li> 
                                <li><a href='#'>наши магазины</a></li>
                            </ul>
                        </div>
                        <div className={styles.footer_col}>
                        <h2>клиентам</h2>
                            <ul>
                                <li><a href='#'>вопросы — ответы</a></li> 
                                <li><a href='#'>заказы и доставка</a></li> 
                                <li><a href='#'>возврат товара</a></li>
                                <li><a href='#'>бонусная программа</a></li>
                            </ul>
                        </div>
                        <div className={styles.footer_col}>
                        <h2>контакты</h2>
                            <ul>
                                <li><a href='#'>общие контакты</a></li> 
                                <li><a href='#'>отдел маркетинга и рекламы</a></li> 
                               
                            </ul>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default template;