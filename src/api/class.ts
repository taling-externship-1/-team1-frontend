import { AxiosPromise } from 'axios';
import { instance } from './instance';
import { ClassResponseDto, ClassSearchQuery } from '@/interfaces';

export default {
  fetchClassList(query?: ClassSearchQuery): AxiosPromise<ClassResponseDto> {
    if (query?.keyword && query?.page) {
      return instance.get(`/lectures?keyword=${query?.keyword}&page=${query?.page}`);
    }
    return instance.get('/lectures');
  },
};
