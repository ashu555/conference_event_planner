// transportationSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const transportationSlice = createSlice({
  name: "transportation",
  initialState: [
    {
      img: "https://pixabay.com/images/download/chairs-2181916_640.jpg",
      name: "Bus (Capacity:15)",
      cost: 20,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/event-venue-1597531_640.jpg",
      name: "Taxi (Capacity:10)",
      cost: 100,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/convention-center-3908238_640.jpg",
      name: "Rental (Capacity:5)",
      cost: 150,
      quantity: 0,
    },
    
  ],
  reducers: {
   
    incrementTranQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
        item.quantity++;
      }
    },
    decrementTranQuantity: (state, action) => {
      const item = state[action.payload];
      if(item && item.quantity > 0) {
        item.quantity--;
      }
    },
  },
});

export const { incrementTranQuantity, decrementTranQuantity } = transportationSlice.actions;

export default transportationSlice.reducer;
