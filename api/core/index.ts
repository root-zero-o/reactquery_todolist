import axios from "axios";

// Axios Instance
const api = axios.create({
    baseURL: "http://localhost:5000/"
})

// interceptor는 필요하지 않아 생략

export default api;