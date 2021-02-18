<template>
  <form @submit.prevent="postData(endpoint)" class="create-form">
    <h2 class="create-form__title">{{ subject }}</h2>
    <label v-if="titleInput" for="title" class="create-form__label"
      >{{ titleInput }}:</label
    >
    <input
      v-if="titleInput"
      v-model="state.title"
      type="text"
      id="title"
      name="title"
      class="create-form__input"
    />
    <label v-if="contentInput" for="content" class="create-form__label"
      >{{ contentInput }}:</label
    >
    <textarea
      rows="8"
      v-if="contentInput"
      v-model="state.content"
      id="content"
      name="content"
      class="create-form__input create-form__input_area"
    />
    <label v-if="ageInput" for="age" class="create-form__label"
      >{{ ageInput }}:</label
    >
    <input
      v-if="ageInput"
      v-model="state.age"
      type="number"
      id="age"
      name="age"
      class="create-form__input"
    />
    <label v-if="extraInput" for="extra" class="create-form__label"
      >{{ extraInput }}:</label
    >
    <input
      v-if="extraInput"
      v-model="state.extra"
      type="text"
      id="extra"
      name="extra"
      class="create-form__input"
    />
    <label v-if="fileInput" for="file" class="create-form__label"
      >{{ fileInput }}:</label
    >
    <input
      v-if="fileInput"
      accept="image/*"
      type="file"
      id="file"
      name="file"
      class="create-form__input create-form__input_file"
    />
    <p
      :class="{ 'create-form__status_red': state.errorText }"
      class="create-form__status"
    >
      {{ state.status }}
    </p>
    <button class="create-form__button" type="submit">Opret</button>
  </form>
</template>

<script>
const axios = require("axios");
import { reactive } from "vue";

import store from "@/store/index.js";

export default {
  name: "CreateForm",
  props: {
    subject: {
      required: true,
      type: String
    },
    titleInput: {
      required: false,
      type: String
    },
    contentInput: {
      required: false,
      type: String
    },
    ageInput: {
      required: false,
      type: String
    },
    extraInput: {
      required: false,
      type: String
    },
    fileInput: {
      required: false,
      type: String
    },
    endpoint: {
      required: true,
      type: String
    },
    adoptsection: {
      required: false,
      type: Boolean,
      default: false
    },
    about: {
      required: false,
      type: Boolean,
      default: false
    },
    animal: {
      required: false,
      type: Boolean,
      default: false
    },
    asset: {
      required: false,
      type: Boolean,
      default: false
    },
    volunteer: {
      required: false,
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    const state = reactive({
      title: "",
      content: "",
      age: null,
      extra: "",
      status: "",
      errorText: false
    });

    const postData = endpoint => {
      state.errorText = false;
      if (props.adoptsection !== null) {
        if (state.title === "" || state.content === "") {
          state.errorText = true;
          state.status = "Udfyld venligst felterne";
          return;
        }
        axios
          .post(
            `http://localhost:4000/api/v1/${endpoint}`,
            `title=${state.title}&content=${state.content}&assetId=11`,
            { headers: { Authorization: `Bearer ${store.state.token}` } }
          )
          .then(response => {
            console.log(response);
            state.status = "Genstand oprettet!";
          })
          .catch(err => console.error(err));
        return;
      }
      if (props.about !== null) {
        if (state.title === "" || state.content === "") {
          state.errorText = true;
          state.status = "Udfyld venligst felterne";
          return;
        }
        axios
          .post(
            `http://localhost:4000/api/v1/${endpoint}`,
            `title=${state.title}&content=${state.content}`,
            { headers: { Authorization: `Bearer ${store.state.token}` } }
          )
          .then(response => {
            console.log(response);
            state.status = "Genstand oprettet!";
          })
          .catch(err => console.error(err));
        return;
      }
      if (props.animal !== null) {
        if (state.title === "" || state.content === "" || state.age === null) {
          state.errorText = true;
          state.status = "Udfyld venligst felterne";
          return;
        }
        axios
          .post(
            `http://localhost:4000/api/v1/${endpoint}`,
            `name=${state.title}&description=${state.content}&age=${state.age}&assetId=5`,
            { headers: { Authorization: `Bearer ${store.state.token}` } }
          )
          .then(response => {
            console.log(response);
            state.status = "Genstand oprettet!";
          })
          .catch(err => console.error(err));
        return;
      }
      if (props.volunteer !== null) {
        if (state.title === "" || state.content === "") {
          state.errorText = true;
          state.status = "Udfyld venligst felterne";
          return;
        }
        axios
          .post(
            `http://localhost:4000/api/v1/${endpoint}`,
            `title=${state.title}&content=${state.content}&extra=${state.extra}&assetId=14`,
            { headers: { Authorization: `Bearer ${store.state.token}` } }
          )
          .then(response => {
            console.log(response);
            state.status = "Genstand oprettet!";
          })
          .catch(err => console.error(err));
        return;
      }
    };

    return {
      postData,
      state
    };
  }
};
</script>

<style lang="scss" scoped>
.create-form {
  flex: 1;
  display: flex;
  flex-direction: column;

  &__title {
    font-weight: 500;
    font-size: 1.5em;
    margin-bottom: 1em;
  }
  &__label {
    font-size: 1.2em;
    margin-bottom: 0.3em;
  }
  &__input {
    font-size: 1em;
    padding: 0.5em;
    font-family: "Oswald", sans-serif;
    margin-bottom: 1em;
    border-radius: 5px;
    border: 2px solid rgb(182, 182, 182);

    &_area {
      resize: none;
    }
    &_file {
      border: none;
      padding: 0;
    }
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
