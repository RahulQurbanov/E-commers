import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: { selectedCategoryId: null, selectedProductId: null, selectedProductImage: null, selectedBrand: null },
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
    }
  },
});

export const { setCategoryId, setProductId, setProductImage, setBrand} = categorySlice.actions;
export default categorySlice.reducer;
