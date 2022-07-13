import axios from "axios";

const KEY = "AIzaSyCvadzVLeqtJahMxf6OGdtRSfSmQC1x60w";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "videos",
    maxResults: "100",
    key: KEY,
  },
});
