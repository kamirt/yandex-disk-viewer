import Vue from 'vue';
import Vuex from 'vuex';
import mainStore from './components/main/main.js';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    strict: debug,
    modules: {
      folders: mainStore
    }
});
