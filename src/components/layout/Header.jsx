"use client"
import React, {useState} from 'react';
import styles from "@/src/styles/StylesHeader.module.css"
import Link from "next/link";
import svg1 from "@/public/Vector.svg"
import svg2 from "@/public/Vector (5).svg"
import svg3 from "@/public/Frame.svg"
import svg4 from "@/public/Vector(5=4).svg"
import svg5 from "@/public/Vector88.svg"
import svg6 from "@/public/Vectore.svg"
import svg7 from "@/public/Framess.svg"
import imgpro from "@/public/avatar.jpg"
import Image from "next/image";
import {IoMdClose} from "react-icons/io";
import {useSession} from "next-auth/react";
import {signOut} from "next-auth/react";

import {FaSignInAlt} from "react-icons/fa";
import {MdOutlineAccountBox} from "react-icons/md";


function Header(props) {
    const [none, setNone] = useState(true)
    const [show, setShow] = useState(false)
    const [dashboardShow, setDashboardShow] = useState(false)


    const {status, data, update} = useSession()
    console.log({status, data, update})

    const startClose = () => {
        setNone(false)
    }

    const showNavbar = () => {
        setShow(!show)
    }

    const startProfile = () =>{
        setDashboardShow(!dashboardShow)
    }


    return (
        <header>
            {
                none ? (<div className={styles.headerTop}>
                        <div className={styles.headerText}>

                      <span>
                    Sign up and get 20% off to your first order.<Link href="/signup"> Sign Up Now</Link>
                </span>

                            <Image onClick={startClose} src={svg1} alt="icon" width={15} height={15} priority={true}/>


                        </div>
                    </div>
                ) : ""
            }

            <div className={styles.NavBarMenu}>
                <div className={styles.responsive}>
                    <Image src={svg6} onClick={showNavbar} alt="icon" width={18} height={14} priority={true}/>
                </div>
                <nav className={styles.Nav}>
                    <div className={styles.LogoHeader}>
                        <Link href="/">SHOP.CO</Link>
                    </div>
                    <ul className={show ? styles.responsive_nav : null}>
                        <li>
                            <span>Shop </span>
                            <Image src={svg4} alt="icon" width={11} height={6} priority={true}/>
                        </li>
                        <li><Link href="">On Sale</Link></li>
                        <li><Link href="">New Arrivals</Link></li>
                        <li><Link href="">Brands</Link></li>
                        <button
                            className={styles.Nav_close_btn}
                            onClick={showNavbar}>
                            <IoMdClose/>
                        </button>

                    </ul>
                </nav>
                <div className={styles.InputSearsh}>
                    <Image src={svg5} alt="icon" width={27} height={27} priority={true}/>
                    <input type="text" placeholder="Search for products..."/>
                </div>
                <div className={styles.SearsResponsive}>
                    <Image src={svg7} alt="icon" width={24} height={24} priority={true}/>
                </div>
                <div className={styles.itemNavbar}>
                    <div className={styles.ShopCard}>
                        <Link href=""> <Image src={svg2} alt="icon" width={24} height={24} priority={true}/></Link>
                    </div>
                    <div className={styles.signin}>
                        {data ? (
                            <div className={styles.LoginProfile} onClick={startProfile}>
                                <Image src={imgpro} alt="icon" width={27} height={27} priority={true}/>

                                     <div className={dashboardShow ?  styles.dashboard  : styles.dashboard_off}>
                                        <ul>
                                            <li>
                                                <Link href="/dashboard">
                                                    حساب کاربری
                                                </Link>
                                                <MdOutlineAccountBox />
                                            </li>
                                            <li onClick={signOut}>
                                                خروج
                                                <FaSignInAlt />
                                            </li>
                                        </ul>
                                    </div>


                            </div>
                        ) : (<Link href="/signup"> <Image src={svg3} alt="icon" width={24} height={24}
                                                          priority={true}/></Link>)}

                    </div>
                </div>

            </div>

        </header>

    )
        ;
}

export default Header;