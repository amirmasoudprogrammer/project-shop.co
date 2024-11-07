import React, {useState} from 'react';
import styles from "@/src/styles/StylesProductDetailPage.module.css"
import {Container} from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import svg1 from "@/public/Frame 40.png"
import Loading from "@/src/components/module/Loading";
import {useDispatch, useSelector} from "react-redux";
import {quantityitms} from "@/src/helper/Help";
import svg4 from "@/public/VectorFilters.svg"
import svg5 from "@/public/Vector 9999.svg"
import svg6 from "@/public/VectorPuls.svg"
import svg7 from "@/public/FrameMnf.svg"
import svg8 from "@/public/Frameiconss.svg"
import {addITEM, decrease, increase} from "@/src/redux/features/cart/cartSlice";
import DataComment from "@/src/helper/DataComment";
import CardComment from "@/src/components/module/CardComment";
import CardProducts from "@/src/components/module/CardProducts";
import Title from "@/src/components/module/Title";
import Link from "next/link";
import ColorPicker from "@/src/components/module/ColorPicker";
import SizeSelector from "@/src/components/module/SizeSelector";


function ProductDetailPage({data}) {

    const {id, title, description, price, images, category} = data;
    const {name} = category || {};

    const state = useSelector(store => store.cart);
    const {Products} = useSelector(store => store.Products);

    const dispatch = useDispatch();
    const quantity = quantityitms(state, id);

    const [mainImage, setMainImage] = useState(images?.[0] || null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const handleImageChange = (image) => {
        setMainImage(image);
    };
    const onSelectColor = (color) => {
        setSelectedColor(color);
        console.log(color)

    };
    const onSelectSize = (size) => {
        setSelectedSize(size)
        console.log(size)
    }

    return (
        <>
            <Container maxWidth="lg">
                <div className={styles.Namepages}>
                    <Link href="/">Home</Link>
                    <Image src={svg8} alt="icon" width={21} height={10}/>
                    <Link href="/Categories">shop</Link>
                    <Image src={svg8} alt="icon" width={21} height={10}/>
                    <Link href="">{name}</Link>
                </div>
                <div className={styles.PageMain}>
                    <div className={styles.PageDetail}>
                        <Grid container spacing={2}>
                            <Grid size={{xl: 7, lg: 7, md: 6, sm: 12, xs: 12}}>
                                <div className={styles.Imges}>
                                    <div className={styles.ItemImages}>
                                        {images?.map((img, index) => (
                                            <Image
                                                key={index}
                                                src={img}
                                                alt={`Image ${index + 1}`}
                                                width={152}
                                                height={168}
                                                className={img === mainImage ? styles.imgCard : null}
                                                onClick={() => setMainImage(img)}
                                            />
                                        ))}
                                    </div>
                                    <div className={styles.ItemIMG}>
                                        {mainImage ? <Image src={mainImage} alt="IMAGE" width={444} height={530}/> :
                                            <Loading/>}
                                    </div>
                                </div>
                            </Grid>

                            <Grid size={{xl: 5, lg: 5, md: 6, sm: 12, xs: 12}}>
                                <div className={styles.TextDetail}>
                                    <div className={styles.Text}>
                                        <h2>{title}</h2>
                                        {
                                            title ? (<Image src={svg1} alt="icon" width={193} height={24}/>) : null
                                        }

                                        <div className={styles.price}>
                                            {price ? (<span>${price}</span>) : null}
                                            <del>{price ? "$300" : ""}</del>
                                        </div>
                                        <p>{description}</p>
                                    </div>
                                    {price ? (<ColorPicker selectedColor={selectedColor}
                                                           colors={["darkolivegreen", "Olive", "blue"]}
                                                           onSelectColor={onSelectColor}/>) : null}
                                    {price ? (<SizeSelector selectedSize={selectedSize}
                                                            sizes={["Small", "Medium", "Large", "X-Large"]}
                                                            onSelectSize={onSelectSize}/>) : null}

                                    {
                                        price ? (<div className={styles.AddButtomAndQuantity}>
                                                <div className={styles.AddItem}>
                                                    {quantity === 0 ? (<button className={styles.AddItem}
                                                                               onClick={() => {
                                                                                   if (selectedColor && selectedSize) {
                                                                                       dispatch(addITEM({
                                                                                           ...data,
                                                                                           colors: selectedColor,
                                                                                           size: selectedSize
                                                                                       }))
                                                                                   } else {
                                                                                       alert("لطفا سایز و رنگ انتخاب کنید")
                                                                                   }
                                                                               }}>Add
                                                        Cart</button>) : <button className={styles.AddItem}
                                                                                 onClick={() => alert("به سبد خرید اضافه شد")}>Add
                                                        Cart</button>}
                                                </div>
                                                <div className={styles.Cardcheck}>
                                                    {quantity === 0 ?
                                                        <button><Image src={svg6} alt="icon" width={18} height={18}/>
                                                        </button> :
                                                        <button onClick={() => dispatch(increase({
                                                            ...data,
                                                            colors: selectedColor,
                                                            size: selectedSize
                                                        }))}><Image src={svg6}
                                                                    alt="icon"
                                                                    width={18}
                                                                    height={18}/>
                                                        </button>}
                                                    <span>{!!quantity && <span>{quantity}</span>}</span>
                                                    {quantity > 1 ? <button onClick={() => dispatch(decrease({
                                                        ...data,
                                                        colors: selectedColor,
                                                        size: selectedSize
                                                    }))}>
                                                        <Image src={svg7} alt="iocon" width={18} height={18}/>
                                                    </button> : <button onClick={() => alert("یک محصول در سبد خرید هست.")}>
                                                        <Image src={svg7} alt="iocon" width={18} height={18}/>
                                                    </button>}
                                                </div>
                                            </div>)
                                            : null
                                    }

                                </div>

                            </Grid>
                        </Grid>
                    </div>
                    {price ? (<div className={styles.Reviews}>
                        <div className={styles.LinkItems}>
                            <ul>
                                <li>Product Details</li>
                                <li>Rating & Reviews</li>
                                <li>FAQs</li>
                            </ul>
                        </div>
                        <div className={styles.ItemsFilter}>
                            <div className={styles.textItem}>
                                <p>All Reviews</p>
                                <span>(451)</span>
                            </div>
                            <div className={styles.IconItem}>
                                <div className={styles.icon}>
                                    <Image src={svg4} alt="icon" width={24} height={24}/>
                                </div>
                                <div className={styles.textFilter}>
                                    <span>Latest</span>
                                    <Image src={svg5} alt="icon" width={16} height={16}/>
                                </div>
                                <div className={styles.ButtomFilter}>
                                    Write a Review
                                </div>
                            </div>
                        </div>
                    </div>) : null}
                    {price ? (<div className={styles.AllComment}>
                        {DataComment.map((item, index) =>
                            <div className={styles.cardCom} key={index}>
                                <CardComment data={item}/>
                            </div>
                        )}
                    </div>) : null}
                    {price ? (<div className={styles.More_Reviews}>
                        <span>Load More Reviews</span>
                    </div>) : null}
                </div>
                {price ? (<div className={styles.product}>
                    <Title name="You might also like"/>
                    <div className={styles.productItem}>
                        {Products.slice(0, 4).map((item) => (
                            <Grid container key={item.id}>
                                <Grid size={{xl: 3, lg: 3, md: 3, sm: 12, xs: 12}} mt={5}>
                                    <CardProducts data={item}/>
                                </Grid>
                            </Grid>
                        ))}
                    </div>
                </div>) : null}
            </Container>
        </>
    );
}

export default ProductDetailPage;