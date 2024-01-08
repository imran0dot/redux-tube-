import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import tagApi from './tagsApi'

const initialState = {
    isLoading: false,
    isError: '',
    tagItems: []
}

export const fetchTags = createAsyncThunk('tags/fetchTags', async () => {
    const getTags = await tagApi();
    return getTags;
});

const tagslice = createSlice({
    name: 'tag',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTags.pending, (state) => {
                state.isLoading = true
                state.isError = ''
            })
            .addCase(fetchTags.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = '';
                state.tagItems = action.payload
            })
            .addCase(fetchTags.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message;
                state.tagItems = [];
            })
    }
});

export default tagslice.reducer
