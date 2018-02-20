import axios from 'axios'

const state = {
  items: [],
};

const getters = {
  getItems: state => {
      return state.items;
  },
};

const actions = {
  askItems({ state, commit, rootState }, options) {
    let me = this;
    this.commit('folders/setLoader', true);
    options.folder = options.folder === 'root' ? '/root/' : options.folder;
    axios.get(rootState.folders.mainUrl + '/yadisk-api/dir' + options.folder + '?token=' + options.session)
    .then(function(response){
      me.commit('folders/setItems', response.data.items);
      me.commit('folders/setLoader', false);
    })
    .catch(function(error){
      me.commit('folders/setError', error.data);
    });
  }
};

const mutations = {
  setItems(state, items) {
      state.items = items;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
}
