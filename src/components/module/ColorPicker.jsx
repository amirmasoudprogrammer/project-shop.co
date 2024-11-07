import React from 'react';
import styles from "@/src/styles/StylesColorPicker.module.css"

function ColorPicker({ colors, selectedColor, onSelectColor }) {
    return (
        <div className={styles.ButtonItems}>
            <span className={styles.nameColors}>Select Colors</span>
            <div className={styles.itemColor}>
                {colors.map((color) => (
                    <button
                        key={color}
                        style={{ background: color }}
                        onClick={() => onSelectColor(color)}
                    >
                        {selectedColor === color && <span>✓</span>}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ColorPicker;