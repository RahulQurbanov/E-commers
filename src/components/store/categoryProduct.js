import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: { selectedCategoryId: null, selectedProductId: null, selectedProductImage: null },
  reducers: {
    setCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
    setProductId: (state,action) => {
        state.selectedProductId = action.payload;
    },
    setProductImage: (state, action) => {
      state.selectedProductImage = action.payload;
    }
  },
});

export const { setCategoryId, setProductId, setProductImage} = categorySlice.actions;
export default categorySlice.reducer;
