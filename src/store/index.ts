import { User } from '@/interfaces';
import { createStore } from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default createStore<State>({
  state: {
    user: {
      name: '',
      email: '',
      access_token: '',
      token_type: '',
    },
  },
  getters,
  mutations,
  actions,
  modules: {},
});

export type State = {
  user: User;
};
