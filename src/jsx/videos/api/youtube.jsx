import axios from "axios";

const KEY = "AIzaSyC-RzOXFxRsHua-Pl4W7JqlYodQ2SQTiJ0";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
});