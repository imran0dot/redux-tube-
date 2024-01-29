const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    searchInput: '',
    selectedTags: []
};

const filterVideoSlice = createSlice({
    name: 'videoFilter',
    initialState,
    reducers: {
        searchFilter: (state, action) => {
            state.searchInput = action.payload
        },
        selectTag: (state, action) => {
            const alreadySelectedTagIndex = state.selectedTags.indexOf(action.payload)
            if (alreadySelectedTagIndex !== -1) {
                state.selectedTags.splice(alreadySelectedTagIndex, 1)
            } else {
                state.selectedTags.push(action.payload);
            }
        }
    }
});

export default filterVideoSlice.reducer;
export const { searchFilter, selectTag } = filterVideoSlice.actions