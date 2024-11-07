import React from 'react';
import styles from "@/src/styles/StylesSizeSelector.module.css"

function SizeSelector({ sizes, selectedSize, onSelectSize }) {
    return (
        <div className={styles.selectSize}>
            <div className={styles.TextSelectItem}>Choose Size</div>
            <div className={styles.ItemSelect}>
                {sizes.map((size) => (
                    <div
                        key={size}
                        onClick={() => onSelectSize(size)}
                        className={selectedSize === size ? styles.SelectColor : styles.Select}
                    >
                        <span>{size}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SizeSelector;