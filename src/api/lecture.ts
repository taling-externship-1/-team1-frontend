import { AxiosPromise } from 'axios';
import { instance } from './instance';
import { LectureDto } from '@/interfaces';

export default {
  fetchLectures(): AxiosPromise<LectureDto> {
    return instance.get('/lectures');
  },
};
