import React from 'react';
import styles from "@/src/styles/StylesCartShop.module.css"
import Image from "next/image";
import {useDispatch} from "react-redux";
import {MdDeleteOutline} from "react-icons/md";
import {decrease, increase, removeITEM} from "@/src/redux/features/cart/cartSlice";
import {Text} from "@/src/helper/Help";


function CardItems({data}) {
    const {title, images, price, quantity, colors, size} = data
    const dispatch = useDispatch();
    console.log(data)
    return (
        <div className={styles.Cart}>
            <div className={styles.imgAndDetail}>
                <div className={styles.Imges}>
                    <Image src={images[1]} alt="imges" width={124} height={124}/>
                </div>
                <div className={styles.Detail}>
                    <div className={styles.itemS}>
                        <span> {Text(title)}</span>
                        <div className={styles.removeITEM}>
                            {data.quantity === quantity && (
                                <button onClick={() => dispatch(removeITEM(data))}><MdDeleteOutline/></button>)}
                        </div>
                    </div>
                    <div className={styles.ColorAndSize}>
                        <span>Size:<strong>  {size}</strong></span>
                        <p>Color:<strong>{colors}</strong></p>
                    </div>
                    <div className={styles.Price}>
                        <span>${price}</span>
                        <div className={styles.increase}>
                            {data.quantity > 1 && (<button onClick={() => dispatch(decrease(data))}>-</button>)}
                            <span>{data.quantity}</span>
                            <button onClick={() => dispatch(increase(data))}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardItems;