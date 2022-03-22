import { ActionTree } from 'vuex';
import { AccountApi } from '@/api';
import { State } from './index';
import { LoginUserDto } from '@/interfaces';
import { MutationTypes } from './mutation-types';

const actions: ActionTree<State, State> = {
  async login({ commit }, loginUserDto: LoginUserDto) {
    const { data } = await AccountApi.login(loginUserDto);
    commit(MutationTypes.FETCH_USER, data);
  },
};

export default actions;
