import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions/flightAction";

const initialState = {
  isLoading: false,
  isError: false,
  flights: [],
  trail: [],
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getFlights.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getFlights.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });

    builder.addCase(getFlights.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.flights = action.payload;
    });
  },
  reducers: {
    setTrail: (state, action) => {
      const trail = action.payload.map((i) => [i.lat, i.lng]);
      state.trail = trail;
    },
    clearTrail: (state) => {
      state.trail = [];
    },
  },
});

export const { setTrail, clearTrail } = flightSlice.actions;

export default flightSlice.reducer;
