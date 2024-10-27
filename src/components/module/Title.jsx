import React from 'react';
import styles from "@/src/styles/StyleTitle.module.css"

function Title({name}) {
    return (
        <div className={styles.title}>
            <h2>{name}</h2>
        </div>
    );
}

export default Title;