import { MutationTree } from 'vuex';
import { State } from './index';
import { MutationTypes } from './mutation-types';

const mutations: MutationTree<State> = {
  [MutationTypes.FETCH_USER](state, payload) {
    state.user = payload;
  },

  // [MutationTypes.FETCH_CLASS_LIST](state, payload) {
  // }
};

export default mutations;
