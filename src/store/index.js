import Vue from "vue"; // Ensure Vue is imported
import Vuex from "vuex"; // Ensure Vuex is imported

Vue.use(Vuex); // Use Vuex with Vue

export default new Vuex.Store({
  state: {
    languageId: "en", // Example initial state
    categories: [],
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
    setLanguageId(state, languageId) {
      state.languageId = languageId;
    },
  },
  actions: {
    // Define actions if needed
  },
  getters: {
    categories: (state) => state.categories,
    languageId: (state) => state.languageId,
  },
});
