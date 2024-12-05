import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000', // Replace with your backend URL
    timeout: 3000, // Optional: specify a timeout
});

export default axiosInstance;
