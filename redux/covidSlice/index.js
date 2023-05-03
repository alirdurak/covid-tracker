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
      .addCase(fetchWorldData.fulfilled, (state, action) => {
        state.worldData = action.payload.result;
        state.worldDataStatus = "success";
      })
      .addCase(fetchWorldData.pending, (state) => {
        state.worldDataStatus = "loading";
      })
      .addCase(fetchWorldData.rejected, (state) => {
        state.worldDataStatus = "failed";
      });
  },
});
export const { changeTheme } = covidSlice.actions;
export default covidSlice.reducer;
