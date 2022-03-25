import { GetterTree } from 'vuex';
import { State } from './index';

const getters: GetterTree<State, State> = {
  isLogin(state) {
    return !!state.user.access_token;
  },
};

export default getters;
