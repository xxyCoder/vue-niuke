import axios from './config.js';

export function getHomeData() {
    return axios.get('/homeData');
}