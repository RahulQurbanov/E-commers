import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: { selectedCategoryId: null, selectedProductId: null },
  reducers: {
    setCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
    setProductId: (state,action) => {
        state.selectedProductId = action.payload;
    }
  },
});

export const { setCategoryId, setProductId } = categorySlice.actions;
export default categorySlice.reducer;
