import React, { useState, useEffect } from 'react';
import styles from './modal.module.css';

const Modal = ({ isOpen, onClose, imageSrc }) => {
    if (!isOpen) return null;
   
   return (
    <>
     <div className={styles.modal_overlay} onClick={onClose}>
      <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc}  />
        {/* <button onClick={onClose}>Close</button> */}
      </div>
    </div>
    </>
    );
};

export default Modal;