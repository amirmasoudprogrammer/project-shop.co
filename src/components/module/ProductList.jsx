import React from 'react';
import Title from "@/src/components/module/Title";
import styles from "@/src/styles/stylesCategoriesHomePage.module.css";
import Loading from "@/src/components/module/Loading";
import Grid from "@mui/material/Grid2";
import CardProducts from "@/src/components/module/CardProducts";

function ProductList({title , products ,loading}) {
    return (
       <>
           <Title name={title}/>
           <div className={styles.Categories}>
               {loading ? <Loading/> : products.map((item) => (
                   <Grid container key={item.id} spacing={2}>
                       <Grid item size={{xs:12 ,sm:12, md:12 ,lg:4, xl:4}} mt={5}>
                           <CardProducts data={item} />
                       </Grid>
                   </Grid>
               ))}
           </div>
       </>
    );
}

export default ProductList;