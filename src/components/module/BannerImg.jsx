"use client"
import React, {useEffect} from 'react';
import imgbanner from "@/public/Rectangle 2.png"
import Image from "next/image";
import styles from "src/styles/Banner.module.css"
import Link from "next/link";
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {FiPlus} from "react-icons/fi";
import {Container} from "@mui/material";
import Grid from "@mui/material/Grid2";
import img1 from "@/public/Vectore.svg"
import img2 from "@/public/zara-logo-1 1.svg"
import img3 from "@/public/Vector (1).svg"
import img4 from "@/public/prada-logo-1 1.svg"
import img5 from "@/public/Group.svg"


function BannerImg(props) {

    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <div className={styles.Container}>
                <div className={styles.TextBanner} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1">
                    <h2>
                        FIND CLOTHES THAT MATCHES YOUR STYLE
                    </h2>
                    <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your
                        individuality and cater to your sense of style.</p>
                    <Link href="">Shop Now</Link>
                    <div className={styles.Nambers}>
                        <div className={styles.ItemCardNamber}>
                            <div className={styles.NamberItem}>
                                <CountUp start={0} end={200} duration={2.75}/>
                                <span className={styles.plus}><FiPlus/></span>
                            </div>
                            <div className={styles.textItems}>
                                <span>International Brands</span>
                            </div>
                        </div>
                        <div className={styles.ItemCardNamber}>
                            <div className={styles.NamberItem}>
                                <CountUp start={0} end={2000} duration={2.75}/>
                                <span className={styles.plus}><FiPlus/></span>
                            </div>
                            <div className={styles.textItems}>
                                <span>High-Quality Products</span>
                            </div>
                        </div>
                        <div className={styles.ItemCardNamber}>
                            <div className={styles.NamberItem}>
                                <CountUp start={0} end={30000} duration={2.75}/>
                                <span className={styles.plus}><FiPlus/></span>
                            </div>
                            <div className={styles.textItems}>
                                <span>Happy Customers</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.img}>
                    <Image src={imgbanner} alt="image" width={1440} height={637} priority={true}/>
                </div>
            </div>

            <div className={styles.LogoBanner}>
                <Container maxWidth="xl">
                    <Grid container spacing={1} display="flex" alignItems="center" justifyContent="space-evenly" height="122px">
                        <Grid size={{xl: 2, lg: 2, md: 2, sm: 4, xs: 4}} display="flex" alignItems="center" justifyContent="center"  >
                            <Image src={img1} alt="icon" width={166} height={33} priority={true}/>
                        </Grid>
                        <Grid size={{xl: 2, lg: 2, md: 2, sm: 4, xs: 4}} display="flex" alignItems="center" justifyContent="center">
                            <Image src={img2} alt="icon" width={91} height={38} priority={true}/>
                        </Grid>
                        <Grid size={{xl: 2, lg: 2, md: 2, sm: 4, xs: 4}} display="flex" alignItems="center" justifyContent="center">
                            <Image src={img3} alt="icon" width={156} height={36} priority={true}/>
                        </Grid>
                        <Grid size={{xl: 2, lg: 2, md: 2, sm: 6, xs: 6}} display="flex" alignItems="center" justifyContent="center">
                            <Image src={img4} alt="icon" width={194} height={32} priority={true}/>
                        </Grid>
                        <Grid size={{xl: 2, lg: 2, md: 2, sm: 6, xs: 6}}  display="flex" alignItems="center" justifyContent="center">
                            <Image src={img5} alt="icon" width={206} height={33} priority={true}/>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default BannerImg;