import { AxiosPromise } from 'axios';
import { authInstance } from './instance';
import { ClassResponseDto } from '@/interfaces';

export default {
  fetchClassList(): AxiosPromise<ClassResponseDto> {
    return authInstance.get('/lectures');
  },
};
