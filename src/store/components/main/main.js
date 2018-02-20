import Vue from 'vue'
import Vuex from 'vuex'
import items from './items'

const state = {
  mainUrl: process.env.NODE_ENV === 'production' ? '' : 'http://127.0.0.1:3000',
  loading: false,
  errorMessage: ''
};

const getters = {
  getLoader: state => {
    return state.loading
  },
  getError: state => {
    return state.errorMessage
  }
};

const actions = {
};

const mutations = {
  setLoader (state, val) {
    state.loading = val;
  },
  setError (state, mes) {
    state.errorMessage = mes;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules: {
    items: items
  }
}
