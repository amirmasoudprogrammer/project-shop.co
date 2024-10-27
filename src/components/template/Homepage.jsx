import React from 'react';
import BannerImg from "@/src/components/module/BannerImg";
import CategoriesHomePage from "@/src/components/template/CategoriesHomePage";
import PageStyleDress from "@/src/components/template/PageStyleDress";
import SliderUser from "@/src/components/template/SliderUser";


function Homepage(props) {
    return (
        <>
            <BannerImg/>
            <CategoriesHomePage/>
            <PageStyleDress/>
            <SliderUser/>


        </>
    );
}

export default Homepage;