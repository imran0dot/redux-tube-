import axios from "../../utils/axios";

export const getVideos = async (tags, searchInput) => {
    let queryStr = '';
    if (tags?.length > 0) {
        queryStr += tags.map(tag => `tags_like=${tag}`).join('&');
    }
    if (searchInput !== '') {
        queryStr += `&q=${searchInput}`
    };

    console.log(queryStr)
    const response = await axios.get(`/videos/?${queryStr}`);
    return response.data;
};
