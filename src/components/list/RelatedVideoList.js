import { useDispatch, useSelector } from "react-redux";
import RelatedVideoListItem from "./RelatedVideoListItem";
import { useEffect } from "react";
import { fetchRelatedVideo } from "../../features/relatedVideos/relatedVideosSlice";

export default function RelatedVideoList({ currentVideoId, tags }) {

    const createTagStr = tags?.reduce((tag, currenValue) => tag + '&tags_like=' + currenValue, '');;
    const queryStr = `?${createTagStr}&id_ne=${currentVideoId}`
    const dispatch = useDispatch();
    const { isLoading, isError, relatedVideos } = useSelector(state => state.relatedVideo);

    useEffect(() => {
        dispatch(fetchRelatedVideo(queryStr))
    }, [dispatch, queryStr])

    if (isLoading) {
        return '...loading'
    } if (isError) {
        return 'something went wrong'
    };


    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {relatedVideos?.map(relatedVideo => <RelatedVideoListItem key={relatedVideo.id} relatedVideo={relatedVideo} />)}
        </div>
    );
}
