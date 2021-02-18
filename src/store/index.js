import { createStore } from "vuex";
import router from "@/router/index.js";
const axios = require("axios");

export default createStore({
  state: {
    user: null,
    token: null
  },
  mutations: {
    LOGIN(state, payload) {
      if (payload.username === "admin" && payload.password == "1234") {
        state.user = payload.username;
        router.push("/admin");
      } else {
        console.log("Unauthorized");
      }
    },
    SET_TOKEN(state, token) {
      state.token = token;
    }
  },
  actions: {
    getToken({ commit }) {
      axios
        .post(
          "http://localhost:4000/auth/token",
          "username=admin&password=1234"
        )
        .then(response => {
          commit("SET_TOKEN", response.data.token);
        })
        .catch(err => console.error(err));
    }
  },
  modules: {}
});
