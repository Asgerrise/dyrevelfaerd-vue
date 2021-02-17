<template>
  <form @submit.prevent="subscribe()" class="newsletter">
    <div class="newsletter__inputs">
      <input
        ref="emailInput"
        class="newsletter__input"
        name="email"
        type="text"
        placeholder="Email"
        v-model="state.email"
      />
      <input
        ref="nameInput"
        class="newsletter__input"
        name="name"
        type="text"
        placeholder="Navn"
        v-model="state.name"
      />
    </div>
    <p
      :class="{ newsletter__status_green: state.green }"
      class="newsletter__status"
    >
      {{ state.status }}
    </p>

    <button
      class="newsletter__button newsletter__button_red"
      type="button"
      @click="unsubscribe()"
    >
      Afmeld
    </button>
    <button class="newsletter__button" type="submit">Tilmeld</button>
  </form>
</template>

<script>
const axios = require("axios");
import { ref, watch, reactive } from "vue";

import router from "@/router/index.js";

export default {
  name: "NewsletterForm",

  setup() {
    const state = reactive({
      email: "",
      name: "",
      status: "",
      green: false
    });

    const token = ref(null);
    const getToken = () => {
      axios
        .post(
          "http://localhost:4000/auth/token",
          "username=admin&password=1234"
        )
        .then(response => (token.value = response.data.token))
        .catch(err => console.error(err));
    };

    watch(token, () => {
      axios.get("http://localhost:4000/api/v1/subscribers", {
        headers: { Authorization: `Bearer ${token.value}` }
      });
    });

    const subscribe = () => {
      state.green = false;
      if (state.email === "") {
        state.status = "Udfyld venligst email";
        return;
      }
      const atpos = state.email.indexOf("@");
      const dotpos = state.email.lastIndexOf(".");
      if (atpos < 1 || dotpos < atpos + 2 || state.email.length <= dotpos + 2) {
        state.status = "Skriv en gyldig e-mail adresse";
        return;
      }
      if (state.name === "" || state.name.length < 2) {
        state.status = "Skriv dit navn";
        return;
      } else {
        state.status = "";
        axios
          .get("http://localhost:4000/api/v1/subscribers", {
            headers: { Authorization: `Bearer ${token.value}` }
          })
          .then(response => {
            response.data.find(subscriber => {
              if (subscriber.email === state.email) {
                state.status = "Denne email adresse er allerede tilmeldt";
                return;
              } else {
                axios
                  .post(
                    "http://localhost:4000/api/v1/subscribers",
                    `name=admin&email=${state.email}`
                  )
                  .then(() => {
                    router.push("/subscribed");
                  });
              }
            });
          });
      }
    };

    const unsubscribe = () => {
      state.green = false;
      if (state.email === "") {
        state.status = "Udfyld venligst email";
        return;
      }
      const atpos = state.email.indexOf("@");
      const dotpos = state.email.lastIndexOf(".");
      if (atpos < 1 || dotpos < atpos + 2 || state.email.length <= dotpos + 2) {
        state.status = "Skriv en gyldig e-mail adresse";
        return;
      } else {
        state.status = "";
        axios
          .delete(`http://localhost:4000/api/v1/subscribers/${state.email}`)
          .then(response => {
            console.log(response);
            state.status = "Du er nu afmeldt";
            state.green = true;
          })
          .catch(err => console.error(err));
      }
    };

    return {
      state,
      getToken,
      subscribe,
      unsubscribe
    };
  },

  mounted() {
    this.getToken();
  }
};
</script>

<style lang="scss" scoped>
.newsletter {
  width: 100%;
  text-align: end;
  margin-bottom: 3em;
  flex: 1;

  &__inputs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
  }
  &__input {
    width: 48%;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #e3e3e6;
    font-family: "Oswald", sans-serif;
    font-size: 1em;
    padding: 0.3em 0.5em;

    &::placeholder {
      opacity: 0.6;
      color: #333;
    }
  }
  &__status {
    text-align: left;
    margin-left: 0.5em;
    color: red;

    &_green {
      color: green;
    }
  }
  &__button {
    font-family: "Oswald", sans-serif;
    font-size: 1em;
    background-color: #0080ff;
    border: none;
    padding: 0.5em 1em;
    color: white;
    border-radius: 5px;
    margin-left: 0.5em;
    cursor: pointer;

    &_red {
      background-color: rgb(156, 24, 24);
    }
  }
}
</style>
