import Axios from 'axios';

const BASE_URL = 'https://dummyjson.com/';

export const apiClient = Axios.create({
    baseURL: BASE_URL,
});