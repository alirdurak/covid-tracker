import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const config = {
  method: "get",
  maxBodyLength: Infinity,
  headers: {
    authorization: "apikey 47f1NKzaBiY2RPaGxGAi6I:6oCOwVyMVL4vOA43AV71oq",
    "content-type": "application/json",
  },
};
export const fetchWorldData = createAsyncThunk(
  "covidSlice/fetchWorldData",
  async () => {
    const { data } = await axios.get(
      "https://api.collectapi.com/corona/totalData",
      { headers: config.headers }
    );

    return data;
  }
);
export const fetchCountriesData = createAsyncThunk(
  "covidSlice/fetchCountriesData",
  async () => {
    const { data } = await axios.get(
      "https://api.collectapi.com/corona/countriesData",
      { headers: config.headers }
    );

    return data;
  }
);
export const fetchContinentsData = createAsyncThunk(
  "covidSlice/fetchContinentsData",
  async () => {
    const { data } = await axios.get(
      "https://api.collectapi.com/corona/continentData",
      { headers: config.headers }
    );

    return data;
  }
);
