import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartList:[]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      const item = state.cartList.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cartList.push({ ...action.payload, quantity: 1 });
      }
    },
    decrement: (state, action) => {
      const itemIndex = state.cartList.findIndex(i => i.id === action.payload);
      if (itemIndex !== -1) {
        const item = state.cartList[itemIndex];
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cartList.splice(itemIndex, 1); 
        }
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer