import axios from 'axios'

const url = process.env.REACT_APP_API_URL ?  process.env.REACT_APP_API_URL: '';

export default axios.create({
  baseURL: url + '/api',
  timeout: process.env.NODE_ENV === 'production' ? 2000 : 0,
  withCredentials: true  
});
