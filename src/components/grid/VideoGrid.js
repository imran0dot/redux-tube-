import { useDispatch, useSelector } from "react-redux";
import VideoGridItem from "./VideoGridItem";
import { useEffect } from "react";
import { fetchVideos } from "../../features/videos/videosSlice";

export default function VideGrid() {
    const dispatch = useDispatch();
    const videos = useSelector(state => state.videos);
    const { selectedTags: tags, searchInput } = useSelector(state => state.filterVideo);

    useEffect(() => {
        dispatch(fetchVideos({ tags, searchInput }));
    }, [dispatch, tags, searchInput]);

    if (videos.isLoading) {
        return 'loading...'
    }

    return (
        <section className="pt-12">
            <section className="pt-12">
                <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                    {videos.videos?.map(video => <VideoGridItem key={video.id} video={video} />)}
                    {/* <div className="col-span-12">some error happened</div> */}
                </div>
            </section>
        </section>
    );
}
