import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import store from '@/store';

function setInterceptors(instance: AxiosInstance): AxiosInstance {
  instance.interceptors.request.use((config: AxiosRequestConfig) => {
    if (config.headers) config.headers.Authorization = `Bearer ${store.state.user.access_token}`;
    return config;
  });

  return instance;
}

const createInstance = (): AxiosInstance =>
  axios.create({
    baseURL: process.env.VUE_APP_API,
    headers: {
      Accept: 'application/json',
    },
  });

const createAuthInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API,
  });
  return setInterceptors(instance);
};

export const instance = createInstance();
export const authInstance = createAuthInstance();
