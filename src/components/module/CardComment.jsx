import React from 'react';
import styles from "@/src/styles/StylesCardComment.module.css";
import Image from "next/image";
import svg1 from "@/public/Frameffff.png"

function CardComment({data}) {
    return (
        <div className={styles.CardItem} >
            <Image src={data.star} alt="icon" width={138} height={22} priority={true}/>
            <div className={styles.Title}>
                <div>
                    <Image src={svg1} alt="icon" width={20} height={20} priority={true}/>
                    <span>{data.name}</span>
                </div>

                <p>{data.description}</p>
            </div>


        </div>
    );
}

export default CardComment;