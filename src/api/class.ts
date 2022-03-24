import { AxiosPromise } from 'axios';
import { authInstance } from './instance';
import { ClassRequestDto } from '@/interfaces';

export default {
  fetchClassList(classRequest: ClassRequestDto): AxiosPromise<ClassRequestDto> {
    return authInstance.get('/lectures');
  },
};
