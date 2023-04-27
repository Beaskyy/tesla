import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [
    { model: "Model s", id: "model-s" },
    { model: "Model 3", id: "model-3" },
    { model: "Model X", id: "model-x" },
    { model: "Model Y", id: "model-y" },
  ],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;
