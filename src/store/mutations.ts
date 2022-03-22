import { MutationTree } from 'vuex';
import { State } from './index';

const mutations: MutationTree<State> = {
  setProducts(state, payload) {
    state.user = payload;
  },
};

export default mutations;
