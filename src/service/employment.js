import axios from './config.js';

export function getEmploymentData() {
    return axios.get('/employment');
}