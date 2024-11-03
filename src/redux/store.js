import {configureStore} from "@reduxjs/toolkit";
import ProductSlice from "@/src/redux/features/product/ProductSlice";
import logger from "redux-logger";
import cartSlice from "@/src/redux/features/cart/cartSlice";


const store = configureStore({
    reducer:{
        Products:ProductSlice,
        cart:cartSlice
    }
})
export default store