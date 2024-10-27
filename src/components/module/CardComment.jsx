import React from 'react';
import styles from "@/src/styles/StylesCardComment.module.css";
import Image from "next/image";

function CardComment({data}) {
    return (
        <div className={styles.CardItem}>
            <Image src={data.star} alt="icon" width={138} height={22} priority={true}/>
            <div className={styles.Title}>
                <span>{data.name}</span>
                <p>{data.description}</p>
            </div>


        </div>
    );
}

export default CardComment;