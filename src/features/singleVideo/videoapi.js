import axios from "../../utils/axios"

const getSingleVideo = async (id) => {
    const responce = await axios('/videos');
    const videos = responce.data;
    const videoFilter = videos.find(video => JSON.stringify(video.id) === id)
    return videoFilter;
};

export default getSingleVideo;