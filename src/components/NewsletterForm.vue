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
    <p class="newsletter__status">{{ state.status }}</p>
    <button class="newsletter__button" type="submit">Tilmeld</button>
  </form>
</template>

<script>
const axios = require("axios");
import { ref, watch, reactive } from "vue";

export default {
  name: "NewsletterForm",

  setup() {
    const state = reactive({
      email: "",
      name: "",
      status: ""
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
      axios
        .get("http://localhost:4000/api/v1/subscribers", {
          headers: { Authorization: `Bearer ${token.value}` }
        })
        .then(response => console.log(response));
    });

    const subscribe = () => {
      if (state.email === "") {
        state.status = "Udfyld venligst email";

        return;
      }
      if (state.name === "") {
        window.alert("Udfyld navn");
        return;
      } else {
        axios
          .get("http://localhost:4000/api/v1/subscribers", {
            headers: { Authorization: `Bearer ${token.value}` }
          })
          .then(response => {
            response.data.find(subscriber => {
              if (subscriber.email === state.email) {
                window.alert("Denne email er allerede tilmeldt");
              } else {
                axios
                  .post(
                    "http://localhost:4000/api/v1/subscribers",
                    `name=admin&email=${state.email}`
                  )
                  .then(response => {
                    window.alert("Du er nu tilmeldt!");
                    console.log(response);
                  })
                  .catch(err => console.error(err));
              }
            });
          });
      }
    };

    return {
      state,
      getToken,
      subscribe
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
  }
  &__button {
    font-family: "Oswald", sans-serif;
    font-size: 1em;
    background-color: #0080ff;
    border: none;
    padding: 0.5em 1em;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
