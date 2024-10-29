"use client"
import React from 'react';

import {Swiper, SwiperSlide} from 'swiper/react'

import {Container} from "@mui/material";
import styles from "@/src/styles/StylesSlider.module.css"
import svg1 from "@/public/arrow-down-bold 1.svg"
import svg2 from "@/public/arrow-down-bold 2.svg"
import Image from "next/image";
import DataSlider from "@/src/helper/DataSlider";
import CardComment from "@/src/components/module/CardComment";
import {EffectCoverflow, Navigation} from "swiper";

import 'swiper/css'
import 'swiper/css/effect-coverflow'

function SliderUser(props) {


    return (
        <Container maxWidth="lg">
            <div className={styles.PageSlider}>
                <div className={styles.TitleAndButton}>
                    <span>OUR HAPPY CUSTOMERS</span>
                    <div className={styles.Buttons}>
                        <button className='swiper-button-next'>
                            <Image src={svg2} alt="icon" width={24} height={24} priority={true}/>
                        </button>
                        <button className='swiper-button-prev'>
                            <Image src={svg1} alt="icon" width={24} height={24} priority={true}/>
                        </button>
                    </div>
                </div>

                <div className={styles.Cards}>
                    <Swiper
                        breakpoints={{
                            360:{
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            480:{
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 2.8,
                                spaceBetween: 20,
                            },

                        }}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={2.5}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: -75,
                            depth: 250,
                            modifier: 3.5,
                            slideShadows: false,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable: true,
                        }}

                        modules={[EffectCoverflow, Navigation]}
                    >

                        {
                            DataSlider.map((i) => (

                                <SwiperSlide key={i.id} className={styles.Cardslid} >
                                    <CardComment data={i}/>
                                </SwiperSlide>

                            ))
                        }
                    </Swiper>


                </div>


            </div>

        </Container>

    );
}

export default SliderUser;