import { useDispatch, useSelector } from "react-redux";
import VideoPlayer from "../components/description/Player";
import VideoDescription from "../components/description/VideoDescription";
import RelatedVideoList from "../components/list/RelatedVideoList";
import { useEffect } from "react";
import { fetchVideo } from "../features/singleVideo/singleVideoSlice";
import { useLocation } from "react-router-dom";

export default function Video() {
    const dispacth = useDispatch();
    const { isError, isLoading, videoItem } = useSelector(state => state.video);
    const { pathname } = useLocation();
    const getIdFromPath = pathname.split('/')[2];
    const {
        id,
        title,
        author,
        avatar,
        date,
        description,
        duration,
        likes,
        link,
        tags,
        thumbanil,
        unlikes,
        views,
    } = videoItem;

    useEffect(() => {
        dispacth(fetchVideo(getIdFromPath))
    }, [dispacth, pathname, getIdFromPath])

    if (isLoading) {
        return 'Loading...'
    };
    if (isError) {
        return 'Somthing went wrong!'
    }



    return (
        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <div className="col-span-full w-full space-y-8 lg:col-span-2">
                        <VideoPlayer src={link} />

                        <VideoDescription description={{
                            title,
                            date,
                            description
                        }} />
                    </div>

                    <RelatedVideoList currentVideoId={id} tags={tags} />
                </div>
            </div>
        </section>
    );
}
