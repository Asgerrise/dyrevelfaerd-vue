<template>
  <form @submit.prevent="deleteItem()" class="delete-form">
    <h2 class="delete-form__title">{{ subject }}</h2>
    <label for="dropdown" class="delete-form__label">Vælg:</label>
    <select
      v-if="!state.loading && endpoint !== 'animals'"
      class="delete-form__select"
      name="dropdown"
      id="dropdown"
      v-model="state.selectedId"
    >
      <option
        v-for="option in optionItems"
        :key="option.id"
        :value="option.id"
        >{{ option.id + ". " + option.title }}</option
      >
    </select>
    <select
      v-if="!state.loading && endpoint === 'animals'"
      class="delete-form__select"
      name="dropdown"
      id="dropdown"
      v-model="state.selectedId"
    >
      <option
        v-for="option in optionItems"
        :key="option.id"
        :value="option.id"
        >{{ option.id + ". " + option.name }}</option
      >
    </select>
    <p
      :class="{ 'delete-form__status_red': state.errorText }"
      class="delete-form__status"
    >
      {{ state.status }}
    </p>
    <button class="delete-form__button" type="submit">Slet</button>
  </form>
</template>

<script>
const axios = require("axios");
import { ref, watch, reactive } from "vue";

import store from "@/store/index.js";

export default {
  name: "DeleteForm",
  props: {
    subject: {
      required: true,
      type: String
    },
    endpoint: {
      required: true,
      type: String
    }
  },
  setup(props) {
    const state = reactive({
      loading: true,
      selectedId: null,
      status: "",
      errorText: false
    });

    const optionItems = ref(null);
    const getData = () => {
      axios
        .get(`http://localhost:4000/api/v1/${props.endpoint}`)
        .then(response => (optionItems.value = response.data));
    };

    const deleteItem = () => {
      state.errorText = false;
      if (state.selectedId === null) {
        state.errorText = true;
        state.status = "Vælg venligst en genstand.";
        return;
      }
      axios
        .delete(
          `http://localhost:4000/api/v1/${props.endpoint}/${state.selectedId}`,
          {
            headers: {
              Authorization: `Bearer ${store.state.token}`
            }
          }
        )
        .then(response => {
          console.log(response);
          state.status = "Genstand slettet!";
          getData();
        })
        .catch(err => console.error(err));
    };

    watch(optionItems, () => (state.loading = false));

    return {
      state,
      getData,
      optionItems,
      deleteItem
    };
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
.delete-form {
  flex: 1;
  margin-left: 2em;
  display: flex;
  flex-direction: column;

  @media screen and(max-width: 700px) {
    margin-left: 0;
    margin-top: 2em;
  }

  &__title {
    font-weight: 500;
    font-size: 1.5em;
    margin-bottom: 1em;
  }
  &__label {
    font-size: 1.2em;
    margin-bottom: 0.3em;
  }
  &__select {
    font-size: 1em;
    padding: 0.45em 0.5em;
    font-family: "Oswald", sans-serif;
    margin-bottom: 1em;
    border-radius: 5px;
    border: 2px solid rgb(182, 182, 182);
  }
  &__status {
    margin-bottom: 1em;
    color: green;

    &_red {
      color: red;
    }
  }
  &__button {
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
