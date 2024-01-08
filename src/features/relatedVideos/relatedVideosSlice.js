import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getRelatedVideo from "./relattedVideoAPi";

const initialState = {
    isLoading: false,
    isError: '',
    relatedVideos: []
};

export const fetchRelatedVideo = createAsyncThunk('video/fetchRelatedVideo', async (str) => {
    const relatedVideos = await getRelatedVideo(str);
    return relatedVideos;
})
const relatedVideoSlice = createSlice({
    name: 'relateVideo',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchRelatedVideo.pending, (state) => {
                state.isLoading = true;
                state.isError = '';
            })
            .addCase(fetchRelatedVideo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = '';
                state.relatedVideos = action.payload;
            })
            .addCase(fetchRelatedVideo.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message;
                state.relatedVideos = [];
            })
    }
});

export default relatedVideoSlice.reducer;