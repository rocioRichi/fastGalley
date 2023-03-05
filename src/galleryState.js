import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "immer/dist/internal";

export const getPhotos = createAsyncThunk("photos/getPhotos", async () => {
  const response = await fetch("https://picsum.photos/v2/list?àge=3&limit=9");
  const formattedResponse = await response.json();
  return formattedResponse;
});
export const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    photo: [],
    isLoading: false,
  },
  extraReducers: {
    [getPhotos.pending]: (state) => {
      state.isLoading = true;
    },
    [getPhotos.fulfilled]: (state, action) => {
      state.photos = action.payload;
      state.isLoading = false;
    },
    [getPhotos.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default gallerySlice.reducer;
