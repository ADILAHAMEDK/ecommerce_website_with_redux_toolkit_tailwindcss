import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    products:[],
    totalQuantity:0,
    totalPrice:0
}

 const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        addToCart:(state, action)=>{
            const newItem = action.payload;
            const price = parseFloat(newItem.price);
            const itemIndex = state.products.find((item)=> item.id === newItem.id)
            
            if(itemIndex){
                itemIndex.quantity++;
                itemIndex.totalPrice += price
               
            }else{
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    image: newItem.image,
                    price: price,
                    quantity: 1,
                    totalPrice:price,    
                    
                })
            }
            state.totalPrice += price
            state.totalQuantity++;
        } 
    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer