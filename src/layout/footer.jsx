
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
                        
                    </ul>
                    <div className={styles.footer_container_tg}>
                       <a className={styles.footer_tg}  href="https://t.me/izkoltsovo_shop" target="_blank" rel="noopener noreferrer" >
                        <img src={tg}/><span>Telegram</span>
                        </a>
                       <a className={styles.footer_tg}  href="https://wa.me/79915045343" target="_blank" rel="noopener noreferrer" >
                        <img src={tg}/><span>WhatsApp</span>
                        </a>
                    </div>
            </div>

            <div className={styles.footer_menu}>
                <div className={styles.footer_menu_item}>
                    <h3>О НАС</h3>
                    <ul>
                        <li>
                            <a href='/company/'>о компании</a>
                            </li> 
                            <li>
                            <a href='/shops/'>наши магазины</a>
                            </li> 
                            <li>
                            <a href='/help/brands/'>производители и бренды</a>
                            </li>  
                    
                            <li>
                            <a href='/company/jobs/'>вакансии</a>
                            </li>  
                            <li>
                            <a href='/company/reviews/'>отзывы</a>
                            </li> 
                             <li>
                            <a href='/company/politika-konfidetsialnosti/'>политика обработки персональных данных</a>
                            </li>       
                    </ul>
                </div>
                  

                  
           
           
                <div className={styles.footer_menu_item}>
                    <h3>КЛИЕНТАМ</h3>
                    <ul>
                    <li>
                            <a href='/company/sistema-loyalnosti.php'>система лояльности</a>
                            </li> 
                            <li>
                            <a href='/help/'>как купить</a>
                            </li> 
                            <li>
                            <a href='/help/buys/'>заказы и доставка</a>
                            </li>  
                            <li>
                            <a href='/help/faq/'>вопрос - ответ</a>
                            </li> 
                            <li>
                            <a href='/company/sertifikaty/'>сертификаты</a>
                            </li>  
                            <li>
                            <a href='#'>каталог</a>
                            </li> 
                            
                    </ul>
                </div>
                
                <div className={styles.footer_menu_item}>
                    <h3>КОНТАКТЫ</h3>
                    <ul>
                    <li>
                            <a href='/company/sistema-loyalnosti.php'>общие контакты</a>
                            </li> 
                            <li>
                            <a href='#'>отдел маркетинга и рекламы</a>
                            </li> 
                            <li>
                            <a href='#'>для предложений по ассортименту</a>
                            </li>  
                           
                         
                            
                    </ul>
                </div>
                <div className={styles.footer_menu_item}>
                    <h3>Оставайся на связи</h3>
                  
                </div>
               

                  </div>
            
           </div>
        </>
    );
};

export default template_footer;

