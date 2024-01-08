import axios from "axios"

const tags = async () => {
    const tags = await axios('http://localhost:9000/tags');
    return tags.data;
};

export default tags;