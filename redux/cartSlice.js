const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0,
    quntity: 0,
  },
  reducers: {
    addToCart(state, { payload }) {
      // checking if the product is already in the cart
      const checked = state.products.findIndex(
        (product) => product.id == payload.id
      );
      // add it if not
      if (checked == -1) {
        state.products.push(payload);
        // incresing the quntity and total values
        state.quntity = ++state.quntity;
        state.total = state.total + payload.price;
      }
    },
    removeCart(state, { payload }) {
      state.products = state.products.filter(
        (product) => product.id !== payload.id
      );
      state.quntity = --state.quntity;
      state.total = state.total - payload.price;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeCart } = cartSlice.actions;
