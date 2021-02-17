import { createStore } from "vuex";
import router from "@/router/index.js";

export default createStore({
  state: {
    user: null
  },
  mutations: {
    login(state, payload) {
      if (payload.username === "admin" && payload.password == "1234") {
        state.user = payload.username;
        router.push("/admin");
      } else {
        console.log("Unauthorized");
      }
    }
  },
  actions: {},
  modules: {}
});
