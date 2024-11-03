import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    Products: [],
    error: ""
}
const fetchProducts = createAsyncThunk("Product/fetchProducts", () => {
    return fetch(" https://api.escuelajs.co/api/v1/products")
        .then(res => res.json())
        .then(data => data)
})
const ProductSlice = createSlice({
    name: "Product",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.Products = action.payload;
            state.error = ""
        })
        builder.addCase(fetchProducts.rejected,(state,action) => {
            state.loading = false;
            state.Products= [];
            state.error = action.error.message
        })
    }
})

export default ProductSlice.reducer;
export {fetchProducts}