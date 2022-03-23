import { LoginedUserDto } from '@/interfaces';
import { createStore } from 'vuex';
import mutations from './mutations';
import actions from './actions';

export default createStore<State>({
  state: {
    user: {
      name: '',
      email: '',
      access_token: '',
      token_type: '',
    },
  },
  mutations,
  actions,
  modules: {},
});

export type State = {
  user: LoginedUserDto;
};
