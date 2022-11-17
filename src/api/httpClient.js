import axios from 'axios';
import { BASE_URL } from '../constants/config';

export const httpClient = axios.create({
    baseURL: BASE_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});