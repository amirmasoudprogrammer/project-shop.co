"use client"
import React, {useEffect, useState} from 'react';
import ProductDetailPage from "@/src/components/template/ProductDetailPage";


function Page({params: {CategoriesId}}) {
    const [productData, setProductData] = useState([])

    useEffect(() => {
        const dataApi = async () => {
            const res = await fetch("https://api.escuelajs.co/api/v1/products")
            const data = await res.json()
            const filter = await data.find((product) => product.id === +CategoriesId)
            setProductData(filter)
        }

        dataApi()
    }, [])
    console.log(productData)
    return (
        <ProductDetailPage data={productData}/>
    );
}

export default Page;