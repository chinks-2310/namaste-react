import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutating our state - directly modifying the state
      // Vanilla (Older redux) - DON'T MUTATE STATE
      // const newState = [...state]
      // newState.items.push(action.payload)
      // return newState
      
      // Redux Toolkit
      // WE HAVE TO MUTATE THE STATE
      // Redux uses Immer library is used to work with immutable state in more convenient way
      // Current State --> Draft State --> Next State
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    // originalState = {items: ["Pizza"]}
    clearCart: (state) => {
        // state.items = [] will not work
        // Here we are not modifying the state, we are changing the reference, here we are not mutating the state
        // I need to modify my actual state that is originalState
        // to print the state use current(state) console.log(current(state))
        // In RTK - either mutate the existing state or return the state it will replace the original state
      state.items.length = 0; // state.items = [] originalState = []
      // or return { items: [] } // this new object will be replaced inside originalState = {items: [] }
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
