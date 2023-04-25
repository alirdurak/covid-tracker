import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  theme: "light",
};
const covidSlice = createSlice({
  name: "covidSlice",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});
export const { changeTheme } = covidSlice.actions;
export default covidSlice.reducer;
