import axios from "../../utils/axios";;

const getRelatedVideo = async (str) => {
    const responce = await axios(`/videos/${str}`);
    return responce.data;
}

export default getRelatedVideo;