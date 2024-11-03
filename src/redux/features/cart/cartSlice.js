import {createSlice} from "@reduxjs/toolkit";
import {sumItemCounter, total} from "@/src/helper/Help";


const initialState = {
    selecteditem: [],
    itemsCounter: 0,
    total: 0,
    checkout: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addITEM: (state, action) => {
            if (!state.selecteditem.find(item => item.id === action.payload.id)) {
                state.selecteditem.push({...action.payload, quantity: 1})
                state.total = total(state.selecteditem)
                state.itemsCounter = sumItemCounter(state.selecteditem)
                state.checkout = false
            }
        },
        removeITEM: (state, action) => {
          const newRemove = state.selecteditem.filter(item => item.id !== action.payload.id)
            state.selecteditem =newRemove;
            state.total = total(state.selecteditem)
            state.itemsCounter = sumItemCounter(state.selecteditem)
        },
        increase:(state,action) =>{
            const increaseindex =state.selecteditem.findIndex(item => item.id === action.payload.id)
            state.selecteditem[increaseindex].quantity++
            state.total = total(state.selecteditem)
            state.itemsCounter = sumItemCounter(state.selecteditem)
        },
        decrease:(state,action)=>{
            const decreaseindex =state.selecteditem.findIndex(item => item.id === action.payload.id)
            state.selecteditem[decreaseindex].quantity--
            state.total = total(state.selecteditem)
            state.itemsCounter = sumItemCounter(state.selecteditem)
        },
        checkout:(state)=> {
            state.selecteditem=[]
            state.checkout=true;
            state.total=0;
            state.itemsCounter=0;
        }
    }
})
export default cartSlice.reducer;
export const {addITEM ,removeITEM , increase ,decrease ,checkout} = cartSlice.actions