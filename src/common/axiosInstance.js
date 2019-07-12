import axios from 'axios';

const axiosInstance = axios.create({
    baseURL : 'https://my-burger-app-21c06.firebaseio.com/'
})

export default axiosInstance;