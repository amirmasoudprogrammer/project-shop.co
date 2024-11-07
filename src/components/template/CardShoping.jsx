import React, {useEffect, useState} from 'react';
import {Container} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import svg8 from "@/public/Frameiconss.svg";
import styles from "@/src/styles/StylesShopingCart.module.css"
import CardItems from "@/src/components/module/CardItems";
import {useDispatch} from "react-redux";
import {checkout} from "@/src/redux/features/cart/cartSlice";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";


function CardShoping({data}) {
    const [productCart, setProductCart] = useState([])
    const session =useSession()
    const router =useRouter()
    const dispatch = useDispatch();
    useEffect(() => {
        setProductCart(data)
    }, [data])
console.log(productCart)
    return (
        <>
            <Container maxWidth="lg">
                <div className={styles.Namepages}>
                    <Link href="/">Home</Link>
                    <Image src={svg8} alt="icon" width={21} height={10}/>
                    <Link href="">Cart</Link>
                </div>
                <div className={styles.PageShoping}>
                    <div className={styles.ProductCaet}>
                        <div className={styles.NameCart}>
                            <span>Your cart</span>
                        </div>
                        <div className={styles.Product}>
                            {data.selecteditem.map((items, index) => <CardItems data={items} key={index}/>)}
                        </div>
                    </div>
                    <div className={styles.Summary}>
                        <h3>Order Summary</h3>
                        <div className={styles.order}>
                            <div>
                                <span>Subtotal</span>
                                <p>${productCart.itemsCounter}</p>
                            </div>
                            <div>
                                <span>Discount (-20%)</span>
                                <p>$0</p>
                            </div>
                            <div>
                                <span>Subtotal</span>
                                <p>$0</p>
                            </div>
                        </div>
                        <div className={styles.border}></div>
                        <div className={styles.total}>
                            <div>
                                <span>Total</span>
                                <p>{productCart.total}</p>
                            </div>
                            <div className={styles.Apply}>
                                <input type="text" placeholder="Add promo code"/>
                                <button>Apply</button>
                            </div>
                        </div>
                        <div className={styles.Checkout} onClick={() =>
                        {
                            if (session.status === "unauthenticated"){
                                alert("لطفا اول ثبت نام کنید")
                                router.push("/signup")
                            }else if (productCart.itemsCounter === 0 ) {
                                    alert("سبد خالی است لطفا خرید کنید")
                            }
                            else {
                                dispatch(checkout(data))
                            }
                        }
                        }>
                            <buttom>Go to Checkout</buttom>
                        </div>
                    </div>
                </div>
            </Container>

        </>
    );
}

export default CardShoping;