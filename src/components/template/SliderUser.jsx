"use client"
import React from 'react';
import {Container} from "@mui/material";
import styles from "@/src/styles/StylesSlider.module.css"
import svg1 from "@/public/arrow-down-bold 1.svg"
import svg2 from "@/public/arrow-down-bold 2.svg"
import Image from "next/image";
import DataSlider from "@/src/helper/DataSlider";
import CardComment from "@/src/components/module/CardComment";


function SliderUser(props) {


    const startButtomRight = () => {

    }
    const startButtomleft = () => {

    }


    return (
        <Container maxWidth="lg">
            <div className={styles.PageSlider}>
                <div className={styles.TitleAndButton}>
                    <span>OUR HAPPY CUSTOMERS</span>
                    <div className={styles.Buttons}>
                        <button onClick={startButtomRight}>
                            <Image src={svg2} alt="icon" width={24} height={24} priority={true}/>
                        </button>
                        <button onClick={startButtomleft}>
                            <Image src={svg1} alt="icon" width={24} height={24} priority={true}/>
                        </button>
                    </div>
                </div>

                    <div className={styles.Cards}>

                        {
                            DataSlider.map((i) => (
                                <CardComment data={i}/>
                            ))
                        }

                    </div>


            </div>

        </Container>

    );
}

export default SliderUser;