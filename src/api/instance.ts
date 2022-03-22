import axios, { AxiosInstance } from 'axios';
import store from '@/store';

function setInterceptors(instance: AxiosInstance): AxiosInstance {
  instance.interceptors.request.use(oldConfig => {
    const newConfig = oldConfig;
    newConfig.headers.Authorization = `Bearer ${store.state.user.access_token}`;
    return newConfig;
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
    baseURL: process.env.VUE_APP_TALING_API,
  });
  return setInterceptors(instance);
};

export const instance = createInstance();
export const authInstance = createAuthInstance();
