import React from 'react';
import styles from "@/src/styles/StyleDress.module.css"
import Image from "next/image";
import img1 from "@/public/Frame 62.png"
import img2 from "@/public/Frame 61.png"
import img3 from "@/public/Frame 63.png"
import img4 from "@/public/Frame 64.png"
import Title from "@/src/components/module/Title";
import {Container} from "@mui/material";


function PageStyleDress(props) {
    return (
        <Container maxWidth="lg">
        <div className={styles.Page}>
            <Title name="BROWSE BY dress STYLE"/>

            <div className={styles.images}>
                <Image src={img1} alt="icon" width={684} height={289} priority={true}/>
                <Image src={img2} alt="icon" width={407} height={289} priority={true}/>
                <Image src={img3} alt="icon" width={407} height={289} priority={true}/>
                <Image src={img4} alt="icon" width={674} height={289} priority={true}/>
            </div>

        </div>
        </Container>
    );
}

export default PageStyleDress;