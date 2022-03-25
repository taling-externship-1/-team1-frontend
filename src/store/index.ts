import { LoginedUserDto, ClassResponseDto, User } from '@/interfaces';
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
    classList: {
      data: [],
      links: {
        first: '',
        last: '',
        prev: '',
        next: '',
      },
      meta: {
        current_page: 0,
        from: 0,
        last_page: 0,
        links: [],
        path: '',
        per_page: 0,
        to: 0,
        total: 0,
      },
    },
  },
  getters,
  mutations,
  actions,
  modules: {},
});

export type State = {
  classList: ClassResponseDto;
  user: User;
};
