import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID Hun5DeHyCc3XlRSSaclYKs8u-rLsE6BKgNDq8GCVqwg"
    } 
});