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
            console.log(state)
            if (!state.selecteditem.find(item =>item.id === action.payload.id && item.color === action.payload.color && item.size === action.payload.size )) {
                state.selecteditem.push({...action.payload, quantity: 1,   color: action.payload.color, size: action.payload.size,})
                state.total = total(state.selecteditem)
                state.itemsCounter = sumItemCounter(state.selecteditem)
                state.checkout = false
            }
        },
        removeITEM: (state, action) => {
          const newRemove = state.selecteditem.filter(item => item.id !== action.payload.id )
            state.selecteditem =newRemove;
            state.total = total(state.selecteditem)
            state.itemsCounter = sumItemCounter(state.selecteditem)
        },
        increase:(state,action) =>{
            const increaseindex =state.selecteditem.findIndex(item => item.id === action.payload.id  && item.color === action.payload.color && item.size === action.payload.size)
            if (increaseindex >= 0) {
                state.selecteditem[increaseindex].quantity++;
                state.total = total(state.selecteditem);
                state.itemsCounter = sumItemCounter(state.selecteditem);
            }
        },
        decrease:(state,action)=>{
            const decreaseIndex = state.selecteditem.findIndex(item =>
                item.id === action.payload.id &&
                item.color === action.payload.color &&
                item.size === action.payload.size
            );
            if (decreaseIndex >= 0 && state.selecteditem[decreaseIndex].quantity > 1) {
                state.selecteditem[decreaseIndex].quantity--;
                state.total = total(state.selecteditem);
                state.itemsCounter = sumItemCounter(state.selecteditem);
            }
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