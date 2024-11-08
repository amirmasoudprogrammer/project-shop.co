import React, {useState} from 'react';
import {Chip, Container, Slider} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import svg1 from "@/public/Frameiconss.svg";
import svg2 from "@/public/Frameitems.svg";
import svg3 from "@/public/20240316_221259_LE_auto_x2.jpg";
import svg4 from "@/public/VectorITems.svg";
import svg5 from "@/public/Vector(5=4).svg"
import svg6 from "@/public/FrameRespon.svg"
import svg7 from "@/public/FrameCLOE.svg"
import styles from "@/src/styles/StylesCategoriesPage.module.css"
import {category} from "@/src/helper/DataCategorie";
import CardProducts from "@/src/components/module/CardProducts";

const colors = ["#00C12B", "#F50606", "#F5DD06", "#F57906", "#06CAF5", "#063AF5", "#7D06F5", "#F506A4", "#FFFFFF", "#000000"]
const size = ["Small", "Medium", "Large", "X-Large", "XX-Small", "X-Small", "XX-Large", "3X-Large", "4X-Large"]

function CategoriesPage({data}) {


    const [values, setValues] = useState([10, 200]);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [close, setClose] = useState(false);

    const handleSliderChange = (event, newValue) => setValues(newValue);
    const handleColorClick = (color) => setSelectedColor(color);
    const handleSizeSelect = (size) => setSelectedSize(size);


    const handlerMenu = () => {
        setClose(true)
        console.log("start")
    }
    const handlerClose = () => {
        setClose(false)
    }
    const startFilter = () => {

        const filters = data.filter(items => items.price > values[0] && items.price < values[1])

    }

    return (
        <>
            <Container maxWidth="lg">
                <div className={styles.Namepages}>
                    <Link href="/">Home</Link>
                    <Image src={svg1} alt="icon" width={21} height={10}/>
                    <Link href="/Categories">shop</Link>
                </div>
                <div className={styles.MainPages}>

                    <div className={!close ? styles.sidebar : styles.sidebaroFF}>
                        <div className={styles.filters}>
                            <span>Filters</span>
                            <div className={styles.FilterIcons}>
                                <Image src={svg2} alt="" width={24} height={24}/>
                            </div>

                            <div onClick={handlerClose}>
                                <Image src={svg7} alt="" width={24} height={24}/>
                            </div>

                        </div>
                        <div className={styles.border}></div>
                        <div className={styles.NameCategories}>
                            <Link href="/Categories">
                                <span>ALL</span>
                                <Image src={svg1} alt="icon" width={21} height={10}/>
                            </Link>
                            {
                                category.map(item => (
                                    <Link href={{pathname: "/Categories", query: {category: item.type}}} key={item.id}>
                                        <span>{item.type}</span>
                                        <Image src={svg1} alt="icon" width={21} height={10}/>
                                    </Link>))
                            }

                            <div>

                            </div>

                        </div>
                        <div className={styles.border}></div>
                        <div className={styles.Price}>
                            <div className={styles.ITEMTEXTPrice}>
                                <span>Price</span>
                                <Image src={svg4} alt="icon" width={11} height={6}/>
                            </div>
                            <div className={styles.RangePrice}>
                                <Slider className={styles.slider}
                                        sx={{
                                            color: "#000000",
                                            height: 3,
                                            '& .MuiSlider-thumb': {
                                                backgroundColor: "#000000",
                                                border: "2px solid #000000",
                                                width: 20,
                                                height: 20,
                                            },
                                            '& .MuiSlider-track': {
                                                color: "#000000",
                                                height: 3,
                                            },
                                            '& .MuiSlider-rail': {
                                                color: "#F0F0F0",
                                            }
                                        }} step={1} value={values} onChange={handleSliderChange} min={10} max={250}/>
                                <div className={styles.values}>
                                    <span>${values[0]}</span>
                                    <span>${values[1]}</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.border}></div>
                        <div className={styles.selectColor}>
                            <div className={styles.ITEMTEXTColor}>
                                <span>Colors</span>
                                <Image src={svg4} alt="icon" width={11} height={6}/>
                            </div>
                            <div className={styles.Colors}>
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
                        <div className={styles.SelectSize}>
                            <div className={styles.ITEMTEXTSize}>
                                <span>size</span>
                                <Image src={svg4} alt="icon" width={11} height={6}/>
                            </div>
                            <div className={styles.Size}>
                                {size.map((i, index) => (
                                    <div key={index} onClick={() => handleSizeSelect(i)}
                                         className={selectedSize === i ? styles.SelectColor : styles.Select}>
                                        <span>{i}</span>
                                    </div>))}
                            </div>
                        </div>
                        <div className={styles.border}></div>
                        <div className={styles.Dress}>
                            <div className={styles.ITEMTEXTDress}>
                                <span>size</span>
                                <Image src={svg4} alt="icon" width={11} height={6}/>
                            </div>
                            <div className={styles.LinkItems}>
                                <Link href="">
                                    <span>Casual</span>
                                    <Image src={svg1} alt="icon" width={21} height={10}/>
                                </Link>
                                <Link href="">
                                    <span>Formal</span>
                                    <Image src={svg1} alt="icon" width={21} height={10}/>
                                </Link>
                                <Link href="">
                                    <span>Party</span>
                                    <Image src={svg1} alt="icon" width={21} height={10}/>
                                </Link>
                                <Link href="">
                                    <span>Gym</span>
                                    <Image src={svg1} alt="icon" width={21} height={10}/>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.ButtomFilters} onClick={startFilter}>
                            <button>
                                Apply Filter
                            </button>
                        </div>
                    </div>
                    <div className={styles.Products}>
                        <div className={styles.Casual}>
                            <span>Casual</span>
                            <div>
                                <span>Showing 1-10 of 100 Products</span>
                                <p>
                                    Sort by: <strong>Most Popular</strong>
                                    <Image src={svg5} alt="icon" width={11} height={6} priority={true}/>
                                </p>
                                <div className={styles.IconRES} onClick={handlerMenu}>
                                    <Image src={svg6} alt="icon" width={32} height={32} priority={true}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Item}>

                            {data.length === 0 ?
                                <h2>
                                    <Chip label="این محصول در انبار موجود نشده" variant="outlined" color="error"
                                          avatar={<Image style={{borderRadius: "50px"}} src={svg3} alt="icon" width={24}
                                                         height={24}/>}/>
                                </h2>

                                : null}
                            {


                                data.slice(0, 30).map((i) => <CardProducts data={i} key={i.id}/>)
                            }

                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default CategoriesPage;