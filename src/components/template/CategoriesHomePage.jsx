"use client"
import React, {useEffect, useState} from 'react';
import styles from "@/src/styles/stylesCategoriesHomePage.module.css"
import {Container} from "@mui/material";
import Grid from "@mui/material/Grid2";
import CardProducts from "@/src/components/module/CardProducts";
import Loading from "@/src/components/module/Loading";
import Link from "next/link";
import Title from "@/src/components/module/Title";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "@/src/redux/features/product/ProductSlice";


function CategoriesHomePage(props) {
    const {Products , loading} = useSelector((store) => store.Products)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    },[])




    return (
        <>
            <Container maxWidth="xl">
                <Title name="NEW ARRIVALS"/>
                <div className={styles.Categories}>
                    {loading ? <Loading/> : Products.slice(0,4).map((item) => (
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
                    {loading ? <Loading/> : Products.slice(4,8).map((item) => (
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