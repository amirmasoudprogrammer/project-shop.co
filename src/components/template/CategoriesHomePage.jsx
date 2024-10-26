"use client"
import React, {useEffect, useState} from 'react';
import Title from "@/module/Title";
import styles from "src/styles/stylesCategoriesHomePage.module.css"
import {Container} from "@mui/material";
import Grid from "@mui/material/Grid2";
import CardProducts from "@/module/CardProducts";
import Loading from "@/module/Loading";
import Link from "next/link";


function CategoriesHomePage(props) {
    const [dataProduct, setDataProduct] = useState([])
    const [dataProduct2, setDataProduct2] = useState([])
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const dataApi = async () => {
            setLoading(true)
            const res = await fetch("https://api.escuelajs.co/api/v1/products")
            const data = await res.json()
            setLoading(false)
            const sliceData = data.slice(0, 4)
            const sliceData2 = data.slice(4,8)
            setDataProduct2(sliceData2)
            setDataProduct(sliceData)





        }

        dataApi()
    }, [])

    return (
        <>
            <Container maxWidth="xl">
                <Title name="NEW ARRIVALS"/>
                <div className={styles.Categories}>
                    {loading ? <Loading/> : dataProduct.map((item) => (
                        <Grid container key={item.id} spacing={5}>
                            <Grid size={{xl: 4, lg: 4, md: 12, sm: 12, xs: 12}} mt={5}>
                                  <CardProducts data={item}/>
                            </Grid>
                        </Grid>

                    ))}
                </div>
                <div className={styles.View}>
                    <Link href="/Categories">View All</Link>
                </div>
                <Title name="top selling"/>
                <div className={styles.Categories}>
                    {loading ? <Loading/> : dataProduct2.map((item) => (
                        <Grid container key={item.id} spacing={5}>
                            <Grid size={{xl: 4, lg: 4, md: 12, sm: 12, xs: 12}} mt={5}>
                                <CardProducts data={item}/>
                            </Grid>
                        </Grid>

                    ))}
                </div>
                <div className={styles.View}>
                    <Link href="/Categories">View All</Link>
                </div>
            </Container>
        </>
    );
}

export default CategoriesHomePage;