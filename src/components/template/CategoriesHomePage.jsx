"use client"
import React, {useEffect, useState} from 'react';
import styles from "@/src/styles/stylesCategoriesHomePage.module.css"
import {Container} from "@mui/material";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "@/src/redux/features/product/ProductSlice";
import ProductList from "@/src/components/module/ProductList";


function CategoriesHomePage(props) {
    const {Products , loading} = useSelector((store) => store.Products)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])




    return (
        <>
            <Container maxWidth="xl">
                <ProductList title="NEW ARRIVALS" products={Products.slice(0, 4)} loading={loading} />
                <div className={styles.View}>
                    <Link href="/Categories">View All</Link>
                </div>
                <ProductList title="TOP SELLING" products={Products.slice(4, 8)} loading={loading} />
                <div className={styles.View}>
                    <Link href="/Categories">View All</Link>
                </div>
            </Container>
        </>
    );
}

export default CategoriesHomePage;