import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videos/videosSlice";
import tagReducer from "../features/tags/tagSlice";
import singleVideoReducer from '../features/singleVideo/singleVideoSlice'
import relatedVideoReducer from '../features/relatedVideos/relatedVideosSlice'
import filterVideoSlice from '../features/filterVideos/filterVideosSlice'

export const store = configureStore({
    reducer: {
        videos: videosReducer,
        tags: tagReducer,
        video: singleVideoReducer,
        relatedVideo: relatedVideoReducer,
        filterVideo: filterVideoSlice
    },
});
