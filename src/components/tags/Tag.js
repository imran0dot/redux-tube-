import { useDispatch, useSelector } from "react-redux";
import { selectTag } from "../../features/filterVideos/filterVideosSlice"

export default function Tag({ tag }) {
    const dispatch = useDispatch();
    const { selectedTags } = useSelector(state => state.filterVideo);
    const handleClick = () => {
        dispatch(selectTag(tag.title))
    };
    const active = selectedTags.includes(tag.title);
    
    return (
        <div
            onClick={handleClick}
            className={
                ` px-4 py-1 rounded-full cursor-pointer
             ${active ?
                    'bg-blue-600 text-white' :
                    'bg-blue-100 text-blue-600'
                }
             `}>
            {tag.title}
        </div>
    );
}
