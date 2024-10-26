import React from 'react';
import {Container} from "@mui/material";
import styles from "@/src/styles/StylesFooter.module.css"
import Image from "next/image";
import Grid from '@mui/material/Grid2';
import svg1 from "@/public/Vectorgmail.svg";
import img from "@/public/Frame 53 (1).png";
import Link from "next/link";
import {FaGithub, FaInstagram, FaLinkedin, FaTelegram} from "react-icons/fa";

function Footer(props) {
    return (
        <footer className={styles.footer}>
            <Container maxWidth="lg">
                <div className={styles.footerUp}>
                    <div className={styles.text}>
                        <span>
                            STAY UPTO DATE ABOUT OUR LATEST OFFERS
                        </span>
                    </div>
                    <div className={styles.Subscribe}>
                        <div>
                            <input type="text" placeholder="Enter your email address"/>
                            <Image src={svg1} alt="icon" width={20} height={15} priority={true}/>
                        </div>
                        <button>
                            Subscribe to Newsletter
                        </button>
                    </div>
                </div>
            </Container>

            <div className={styles.footerBottom}>
                <Container maxWidth="lg" >
                    <Grid container spacing={12} display="flex" justifyContent="space-between">
                        <Grid size={{xl: 3, lg: 3, md: 3, sm: 12, xs: 12}}>
                            <div className={styles.logoFooter}>
                                <h1>SHOP.CO</h1>
                                <p>We have clothes that suits your style and which you’re proud to wear. From women to
                                    men.
                                </p>
                                <div className={styles.linkProfile}>
                                    <Link href="https://instagram.com/mramirmasoud.ir">
                                        <FaInstagram/>
                                    </Link>
                                    <Link
                                        href="https://www.linkedin.com/posts/amirmasoud-asaditalab-35b190307_post-frontend-figma-activity-7246764217809149952-ZyCL?utm_source=share&utm_medium=member_desktop">
                                        <FaLinkedin/>
                                    </Link>
                                    <Link href="https://github.com/amirmasoudprogrammer">
                                        <FaGithub/>
                                    </Link>
                                    <Link href="https://t.me/mramirmasoud_ir">
                                        <FaTelegram/>
                                    </Link>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{xl: 2, lg: 2, md: 2, sm: 6, xs: 6}}>

                            <div className={styles.listMenu}>
                                <span>Company</span>
                                <ul>
                                    <li><Link href="">About</Link></li>
                                    <li><Link href="">Features </Link></li>
                                    <li><Link href="">Works</Link></li>
                                    <li><Link href="">Career</Link></li>
                                </ul>

                            </div>
                        </Grid>
                        <Grid size={{xl: 2, lg: 2, md: 2, sm: 6, xs: 6}}>
                            <div className={styles.listMenu}>
                                <span>Help</span>
                                <ul>
                                    <li><Link href="">Customer Support</Link></li>
                                    <li><Link href="">Delivery Details </Link></li>
                                    <li><Link href="">Terms & Conditions</Link></li>
                                    <li><Link href="">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid size={{xl: 2, lg: 2, md: 2, sm: 6, xs: 6}}>
                            <div className={styles.listMenu}>
                            <span>FAQ</span>
                            <ul>
                                <li><Link href="">Account</Link></li>
                                <li><Link href="">Manage Deliveries</Link></li>
                                <li><Link href="">Orders</Link></li>
                                <li><Link href="">Payments</Link></li>
                            </ul>
                            </div>
                        </Grid>
                        <Grid size={{xl: 2, lg: 2, md: 2, sm: 6, xs: 6}}>
                            <div className={styles.listMenu}>
                            <span>Resources</span>
                            <ul>
                                <li><Link href="">Free eBooks</Link></li>
                                <li><Link href="">Development Tutorial</Link></li>
                                <li><Link href="">How to - Blog</Link></li>
                                <li><Link href="">Youtube Playlist</Link></li>
                            </ul>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <hr/>
                <div className={styles.footerTextBottom}>
                <span>
                    Shop.co © 2000-2023, All Rights Reserved
                </span>

                    <div className={styles.LinkImg}>
                        <Image src={img} alt="img" width={281} height={50} priority={true}/>
                    </div>
                </div>
            </div>




        </footer>
    )
        ;
}

export default Footer;