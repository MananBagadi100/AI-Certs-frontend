import axios from "axios";

// Create a reusable axios instance
const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;