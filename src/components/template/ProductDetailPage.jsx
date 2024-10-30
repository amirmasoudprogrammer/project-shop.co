import React, {useState} from 'react';
import styles from "@/src/styles/StylesProductDetailPage.module.css"
import {Container} from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import svg1 from "@/public/Frame 40.png"


const colors = ["#4F4631", "#314F4A", "#31344F"]
const size = ["Small", "Medium", "Large", "X-Large"]


function ProductDetailPage({data}) {
    const {title, description, price, images, category} = data
    const dataIMG = data?.images || []
    const [mainImage, setMainImage] = useState([dataIMG[1]]);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const handleImageChange = (image) => {
        setMainImage(image);
    };
    const handleColorClick = (color) => {
        setSelectedColor(color);
        console.log(color)
    };
    const handlerSelectSize = (size) => {
        setSelectedSize(size)
        console.log(size)
    }
    return (
        <>

            <Container maxWidth="lg">
                <div className={styles.PageDetail}>
                    <Grid container spacing={2}>
                        <Grid size={{xl: 7, lg: 7, md: 6, sm: 12, xs: 12}}>
                            <div className={styles.Imges}>
                                <div className={styles.ItemImages}>
                                    {images?.map((image, index) => (
                                        <Image
                                            className={image === mainImage ? styles.imgCard : null}
                                            key={index}
                                            src={image}
                                            alt={`عکس ${index + 1}`}
                                            width={152}
                                            height={168}
                                            onClick={() => handleImageChange(image)}
                                        />
                                    ))}
                                </div>
                                <div className={styles.ItemIMG}>
                                    <Image src={mainImage} alt="IMAGE" width={444} height={530}/>
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
                                <div className={styles.ButtonItems}>
                                    <span className={styles.nameColors}>Select Colors</span>
                                    <div className={styles.itemColor}>
                                        {colors.map((color) => (
                                            <button style={{background: color}} key={color}
                                                    onClick={() => handleColorClick(color)}>
                                                {selectedColor === color && (
                                                    <span>
                                                          ✓
                                                     </span>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.selectSize}>
                                    <div className={styles.TextSelectItem}>Choose Size</div>
                                    <div className={styles.ItemSelect}>
                                        {size.map((i) => (
                                            <div onClick={() => handlerSelectSize(i)} className={selectedSize === i ? styles.SelectColor :styles.Select}
                                            >
                                                <span>{i}</span>
                                            </div>))}
                                    </div>

                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>

        </>
    );
}

export default ProductDetailPage;