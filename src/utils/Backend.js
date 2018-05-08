import axios from 'axios';

const Backend = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  timeout: 1000
});

export default Backend;
