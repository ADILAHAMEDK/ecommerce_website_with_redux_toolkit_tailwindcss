import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    products:[],
    searchTerm:"",
    filteredData:[],
};

const productSlice = createSlice({
    name:"products",
    initialState:initialState,
    reducers:{
        getProducts:(state, action)=>{
            state.products = action.payload
        },
        setSearchTerm:(state, action)=>{
            state.searchTerm = action.payload
            state.filteredData = state.products.filter((item)=> item.name.toLowerCase().includes(state.searchTerm.toLowerCase()))
        }
    }
})

export const { getProducts, setSearchTerm} = productSlice.actions
export default productSlice.reducer