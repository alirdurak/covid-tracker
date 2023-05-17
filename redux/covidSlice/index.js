import { createSlice } from "@reduxjs/toolkit";
import {
  fetchWorldData,
  fetchContinentsData,
  fetchCountriesData,
} from "@/services";

const initialState = {
  theme: "light",
  dataStatus: "",
  worldDataStatus: "failed",
  worldData: {},
  data: "",
};
const covidSlice = createSlice({
  name: "covidSlice",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // World Data
      .addCase(fetchWorldData.fulfilled, (state, action) => {
        state.worldData = action.payload.result;
        state.worldDataStatus = "success";
      })
      .addCase(fetchWorldData.pending, (state) => {
        state.worldDataStatus = "loading";
      })
      .addCase(fetchWorldData.rejected, (state) => {
        state.worldDataStatus = "failed";
      })
      // Continents Data
      .addCase(fetchContinentsData.fulfilled, (state, action) => {
        state.data = action.payload.result;
        state.dataStatus = "success";
      })
      .addCase(fetchContinentsData.pending, (state) => {
        state.dataStatus = "loading";
      })
      .addCase(fetchContinentsData.rejected, (state) => {
        state.dataStatus = "failed";
      })
      // Countries Data
      .addCase(fetchCountriesData.fulfilled, (state, action) => {
        state.data = action.payload.result;
        state.dataStatus = "success";
      })
      .addCase(fetchCountriesData.pending, (state) => {
        state.dataStatus = "loading";
      })
      .addCase(fetchCountriesData.rejected, (state) => {
        state.dataStatus = "failed";
      });
  },
});
export const { changeTheme } = covidSlice.actions;
export default covidSlice.reducer;
