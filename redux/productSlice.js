const { createSlice } = require("@reduxjs/toolkit");

const initialState = { products: [], filteredProducts: [], allProducts: [] };

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getProducts(state, { payload }) {
      state.filteredProducts = payload;
      state.products = payload;
      state.allProducts = payload;
    },
    filterProducts(state, { payload }) {
      if (payload == "All") {
        state.products = state.allProducts;
      } else {
        state.products = state.filteredProducts.filter(
          (product) => product.category === payload
        );
      }
    },
  },
});

export default categorySlice.reducer;
export const { filterProducts, getProducts } = categorySlice.actions;
