import { createStore } from "vuex";

export default createStore({
  state: {
    loggedIn: false
  },
  mutations: {
    login(state, payload) {
      if (payload.username === "admin" && payload.password == "1234") {
        state.loggedIn = true;
        console.log("Logged in");
      } else {
        console.log("Unauthorized");
      }
    }
  },
  actions: {},
  modules: {}
});
