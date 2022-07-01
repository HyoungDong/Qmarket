import Axios from 'axios';

export const axios = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axios.interceptors.request.use(config => {
  //config.headers.Authorization = store.getState().authReducer.accessToken || '';
  console.log(process.env.REACT_APP_API_URL);
  return config;
});
