import axios from 'axios';
import { LOGIN } from './config';

const httpClient = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json'
  }
});

const onSuccess = (res) => Promise.resolve(res);
const onError = ({ response }) => Promise.reject(response);

httpClient.interceptors.request.use((request) => {
  if (request.url !== LOGIN) {
    request.headers.Authorization = `Bearer ${localStorage.getItem('authToken')}`;
  }
  return request;
});

httpClient.interceptors.response.use(onSuccess, onError);

export default httpClient;
