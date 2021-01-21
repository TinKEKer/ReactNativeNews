import axios from 'axios';

export const Axios = axios.create({
  baseURL: 'http://newsapi.org/v2/',
});
