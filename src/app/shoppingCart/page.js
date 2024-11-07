"use client"
import React from 'react';
import CardShoping from "@/src/components/template/CardShoping";
import {useSelector} from "react-redux";

function Page(props) {

    const state = useSelector(store => store.cart)

    return (
        <CardShoping data={state}/>
    );
}

export default Page;