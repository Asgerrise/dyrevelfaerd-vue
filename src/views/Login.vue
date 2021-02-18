<template>
  <main class="login">
    <div class="login__wrapper">
      <form class="login__form" @submit.prevent="login()">
        <h2 class="login__title">Admin login</h2>
        <label class="login__label" for="username">Username:</label>
        <input
          v-model="state.username"
          type="text"
          id="username"
          name="username"
          class="login__input"
        />
        <label class="login__label" for="password">Password:</label>
        <input
          v-model="state.password"
          type="password"
          id="password"
          name="password"
          class="login__input"
        />
        <button class="login__button" type="submit">Log in</button>
      </form>
    </div>
  </main>
</template>

<script>
import store from "@/store/index.js";
import { reactive } from "vue";

export default {
  name: "Login",
  setup() {
    const state = reactive({
      username: "",
      password: ""
    });

    const login = () =>
      store.commit({
        type: "LOGIN",
        username: state.username,
        password: state.password
      });

    return {
      state,
      login
    };
  }
};
</script>

<style lang="scss" scoped>
.login {
  &__wrapper {
    max-width: 1200px;
    margin: 0 auto;

    @media screen and(max-width: 1200px) {
      margin: 0 1em;
    }
  }
  &__form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    border: 2px solid #e3e3e6;
    border-radius: 15px;
    padding: 1em 2em 2em;
    height: 400px;
  }
  &__title {
    font-size: 2em;
    color: #325792;
    margin-bottom: 1em;
  }
  &__label {
    font-size: 1.3em;
    margin-bottom: 0.3em;
    margin-left: 0.3em;
  }
  &__input {
    font-size: 1em;
    padding: 0.5em;
    border-radius: 5px;
    border: 1px solid #9c9c9c;
    margin-bottom: 1em;
  }
  &__button {
    margin-top: auto;
    font-family: "Oswald", sans-serif;
    font-size: 1em;
    background-color: #325792;
    border: none;
    padding: 0.5em 1em;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
