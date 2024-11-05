"use client"
import React, {useEffect} from 'react';
import CategoriesPage from "@/src/components/template/CategoriesPage";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "@/src/redux/features/product/ProductSlice";
import Loading from "@/src/components/module/Loading";


function Page({searchParams}) {
    const {Products, loading} = useSelector((store) => store.Products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    let finalData = Products
    if (searchParams.category) {
        finalData = finalData.filter((i) => i.category.name === searchParams.category)
    }



    return (
        <>
            {!loading ? <CategoriesPage data={finalData}/> : <Loading/>}

        </>
    );
}

export default Page;