import React from 'react';
import styles from "@/src/styles/StylesCardComment.module.css";
import Image from "next/image";
import svg1 from "@/public/Frameffff.png"
import svg2 from "@/public/Frameyyyy.svg"

function CardComment({data}) {
    return (
        <div className={data.DatePost ? styles.CardItemPost: styles.CardItem}>
            <div className={styles.itemC}>
                <Image src={data.star} alt="icon" width={138} height={22} priority={true}/>
                {data.DatePost ? (<Image src={svg2} alt="icon" width={24} height={24} priority={true}/>) : ""}
            </div>

            <div className={styles.Title}>
                <div>
                    <Image src={svg1} alt="icon" width={20} height={20} priority={true}/>
                    <span>{data.name}</span>
                </div>

                <p>{data.description}</p>
            </div>
            {
                data.DatePost ? (
                    <div className={styles.DatePost}>
                        {data.DatePost}
                    </div>
                ) : ""
            }
        </div>
    );
}

export default CardComment;