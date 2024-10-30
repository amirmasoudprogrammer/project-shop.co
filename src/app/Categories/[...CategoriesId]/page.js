"use client"
import React, {useEffect, useState} from 'react';
import ProductDetailPage from "@/src/components/template/ProductDetailPage";


function Page({params: {CategoriesId}}) {
    const [productData, setProductData] = useState([])

    useEffect(() => {
        const dataApi = async () => {
            const res = await fetch("https://api.escuelajs.co/api/v1/products")
            const data = await res.json()
            const Datafilter = await data.find((product) => product.id === +CategoriesId)
            setProductData(Datafilter)
        }

        dataApi()
    }, [])
    return (
        <ProductDetailPage data={productData}/>
    );
}

export default Page;