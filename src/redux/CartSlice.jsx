import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const itemIndex = state.products.find((item) => item.id === newItem.id);

      if (itemIndex) {
        itemIndex.quantity++;
        itemIndex.totalPrice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        state.totalPrice -= findItem.totalPrice;
        state.totalQuantity -= findItem.quantity;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        findItem.quantity++;
        findItem.totalPrice += findItem.price;
        state.totalQuantity++;
        state.totalPrice += findItem.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem.quantity > 1) {
        if (findItem) {
          findItem.quantity--;
          findItem.totalPrice -= findItem.price;
          state.totalQuantity--;
          state.totalPrice -= findItem.price;
        }
      }
    },
    addToCartDetailPage: (state, action) => {
      const detailsData = action.payload;
      console.log(detailsData, "detail");
      const quantity = detailsData.quantity;
      const productDetail = detailsData.productDetail;

      const dataExist = state.products.find((item)=> item.id === productDetail.id)

      if (dataExist) {
        dataExist.quantity +=  Number(quantity)
        dataExist.totalPrice += productDetail.price;
      }else{
        state.products.push({
          id: productDetail.id,
          name: productDetail.name,
          image: productDetail.image,
          price: productDetail.price,
          quantity: quantity,
          totalPrice: productDetail.price,
        });

      }
      state.totalQuantity += Number(quantity);
      state.totalPrice += Number(quantity) * Number(productDetail.price);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  addToCartDetailPage,
} = cartSlice.actions;
export default cartSlice.reducer;
