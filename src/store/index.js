import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    celebrations: []
  },
  mutations: {
    addCelebration(state, data) {
      state.celebrations = data;
    }
  },
  actions: {
    getDate({
      commit
    }, modifiedDate) {
      {
        axios.get(`http://calapi.inadiutorium.cz/api/v0/en/calendars/default/${modifiedDate}`)
          .then(response => {
            commit('addCelebration', response.data);
          });
      }
    }
  },
  getters: {
    getCelebrations(state) {
      return state.celebrations;
    }
  },
  modules: {}
});