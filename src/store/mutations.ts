import { MutationTree } from 'vuex';
import { State } from './index';
import { MutationTypes } from './mutation-types';

const mutations: MutationTree<State> = {
  [MutationTypes.FETCH_USER](state, payload) {
    state.user = payload;
  },
};

export default mutations;
