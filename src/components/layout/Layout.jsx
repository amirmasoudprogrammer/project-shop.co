import React from 'react';
import Header from "@/Layout/Header";
import Footer from "@/Layout/Footer";

function Layout({children}) {
    const style = { minHeight: "700px" };
    return (
        <>
            <Header/>
            <div style={style}>{children}</div>
            <Footer/>

        </>
    );
}

export default Layout;