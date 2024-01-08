import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import getSingleVideo from "./videoapi";

const initialState = {
    isLoading: false,
    isError: '',
    videoItem: {}
};

export const fetchVideo = createAsyncThunk('video/fetchVideo', async (id) => {
    const video = await getSingleVideo(id);
    return video;
})


const videoSlice = createSlice({
    name: 'singleVideo',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideo.pending, (state) => {
                state.isLoading = true;
                state.isError = '';
            })
            .addCase(fetchVideo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = '';
                state.videoItem = action.payload;
            })
            .addCase(fetchVideo.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message;
                state.videoItem = {}
            })
    }
});

export default videoSlice.reducer;
