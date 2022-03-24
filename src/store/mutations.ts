import { MutationTree } from 'vuex';
import { State } from './index';
import { MutationTypes } from './mutation-types';

const mutations: MutationTree<State> = {
  [MutationTypes.FETCH_USER](state, payload) {
    state.user = payload;
  },
  [MutationTypes.LOGOUT](state) {
    state.user = { name: '', email: '', access_token: '', token_type: '' };
  },
};

export default mutations;
