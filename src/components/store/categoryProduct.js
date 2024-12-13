import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: { selectedCategoryId: null, selectedProductId: null, selectedProductImage: null, selectedBrand: null, wishlist: [], addcard: [],  },
  reducers: {
    setCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
    setProductId: (state,action) => {
        state.selectedProductId = action.payload;
    },
    setProductImage: (state, action) => {
      state.selectedProductImage = action.payload;
    },
    setBrand: (state, action) => {
      state.selectedBrand = action.payload;
    },
    addToWishlist: (state,action) => {
      if(!state.wishlist.some(product => product.id === action.payload.id)) {
        state.wishlist.push(action.payload)
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(product => product.id !== action.payload);
    },
    addToCard: (state, action) => {
      const existingProduct = state.addcard.find(product => product.id === action.payload.id);
      if (!existingProduct) {
        state.addcard.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCard: (state, action) => {
      state.addcard = state.addcard.filter(product => product.id !== action.payload)
    },
    increment: (state, action) => {
      const product = state.addcard.find(product => product.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const product = state.addcard.find(product => product.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
});

export const { setCategoryId, setProductId, setProductImage, setBrand, addToWishlist, removeFromWishlist, addToCard, removeFromCard, increment, decrement} = categorySlice.actions;
export default categorySlice.reducer;
