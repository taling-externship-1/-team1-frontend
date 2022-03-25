import { ActionTree } from 'vuex';
import axios from 'axios';
import router from '@/router';
import { AccountApi, ClassApi } from '@/api';
import { State } from './index';
import { ClassSearchQuery, CreateUserDto, LoginUserDto } from '@/interfaces';
import { MutationTypes } from './mutation-types';

const actions: ActionTree<State, State> = {
  async login({ commit }, loginUserDto: LoginUserDto) {
    try {
      const { data } = await AccountApi.login(loginUserDto);
      commit(MutationTypes.FETCH_USER, data);
      router.push('/');
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) alert(error.response?.data.message);
    }
  },

  async join({ commit }, createUser: CreateUserDto) {
    try {
      const { data } = await AccountApi.register(createUser);
      commit(MutationTypes.FETCH_USER, data);
      router.push('/');
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) alert(error.response?.data.message);
    }
  },

  async fetchClassList({ commit }, query?: ClassSearchQuery) {
    try {
      const { data } = await ClassApi.fetchClassList(query);
      console.log('data: ', data);
      commit(MutationTypes.FETCH_CLASS_LIST, data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) alert(error.response?.data.message);
    }
  },
};

export default actions;
