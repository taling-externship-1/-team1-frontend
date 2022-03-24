import { AxiosPromise } from 'axios';
import { authInstance } from './instance';
import { ClassRequestDto } from '@/interfaces';

export default {
  fetchClassList(): AxiosPromise<ClassRequestDto> {
    return authInstance.get('/lectures');
  },
};
