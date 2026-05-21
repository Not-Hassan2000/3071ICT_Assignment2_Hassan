import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'orders',

  initialState: {
    orders: [],
  },

  reducers: {
    createOrder: (state, action) => {
      state.orders.unshift({
        id: Date.now(),
        items: action.payload,
        status: 'new',
      });
    },

    markPaid: (state, action) => {
      const order = state.orders.find(
        (item) => item.id === action.payload
      );

      if (order) {
        order.status = 'paid';
      }
    },

    markDelivered: (state, action) => {
      const order = state.orders.find(
        (item) => item.id === action.payload
      );

      if (order) {
        order.status = 'delivered';
      }
    },
  },
});

export const {
  createOrder,
  markPaid,
  markDelivered,
} = orderSlice.actions;

export default orderSlice.reducer;