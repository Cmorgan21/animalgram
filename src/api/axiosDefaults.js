import axios from "axios";

axios.defaults.baseURL = "https://animalgram-drf-7f407bfe4a76.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
