import api from "@/axios/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async () => {
    try {
      const response = await api.get(
        "https://questmanagement.ae/admin/backend/get_services.php"
      );
      return response.data.data.services;
    } catch (error) {
      console.log("Error fetching services:", error);
    }
  }
);

export const servicesSlice = createSlice({
  name: "services",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state, action) => {})
      .addCase(fetchServices.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {});
  },
});
export default servicesSlice.reducer;
