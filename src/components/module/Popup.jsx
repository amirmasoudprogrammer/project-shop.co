import React from 'react';
import styles from "@/src/styles/Popup.module.css"

const Popup = ({ onClose }) => {
    return (
        <div className={styles.popupoverlay}>
            <div className={styles.popup}>
                <h2>این یک پاپ‌آپ است</h2>
                <p>می‌توانید هر متنی را در اینجا قرار دهید.</p>
                <button onClick={onClose}>بستن</button>
            </div>
        </div>
    );
};

export default Popup;
