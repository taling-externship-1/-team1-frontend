import { AxiosPromise } from 'axios';
import { instance } from './instance';
import { CreateUserDto, CreatedUserDto, LoginUserDto, LoginedUserDto } from '@/interfaces';

export default {
  register(createUser: CreateUserDto): AxiosPromise<CreatedUserDto> {
    return instance.post('/register', createUser);
  },

  login(loginUser: LoginUserDto): AxiosPromise<LoginedUserDto> {
    return instance.post('/login', loginUser);
  },
};
