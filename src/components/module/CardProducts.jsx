import React from 'react';
import Link from "next/link";
import svg1 from "@/public/Frame 40.png"
import Image from "next/image";
import styles from "@/src/styles/StylesCardProducts.module.css"
import {Text} from "@/src/helper/Help";


function CardProducts({data}) {
    const {title, price, images} = data
    return (
        <Link className={styles.Card} href={`/Categories/${data.id}`}>
            <img src={images[0]} alt="images"/>
            <span>{Text(title)}</span>
            <div className={styles.icons}>
                <Image src={svg1} alt="icon"/>
            </div>
            <p>${price}</p>
        </Link>
    );
}

export default CardProducts;