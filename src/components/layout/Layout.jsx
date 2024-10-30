import React from 'react';
import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";


function Layout({children}) {
    const style = { minHeight: "900px" };
    return (
        <>
            <Header/>
            <div style={style}>{children}</div>
            <Footer/>

        </>
    );
}

export default Layout;