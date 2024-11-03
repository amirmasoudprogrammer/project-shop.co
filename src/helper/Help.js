const Text = (text) => {
    return text.split(" ").slice(0, 3).join("")
}


const sumItemCounter = (products) =>{
    return products.reduce((acc ,cur) => acc +cur.quantity,0)
}
const total = (products) =>{
    return products.reduce((acc,cur) => acc + cur.price * cur.quantity,0).toFixed(2)
}

const quantityitms = (state, id) => {
    if (!state || !Array.isArray(state.selecteditem)) {
        console.log(state);
        return 0; // مقدار پیش‌فرض
    }
    const items = state.selecteditem.findIndex(item => item.id === id)
    if (items === -1 ){
        return 0
    }else {
        return state.selecteditem[items].quantity
    }
}
export {Text , sumItemCounter , total , quantityitms}