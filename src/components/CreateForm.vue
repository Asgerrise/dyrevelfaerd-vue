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
    <label v-if="imageInput" for="image" class="create-form__label"
      >{{ imageInput }}:</label
    >
    <select
      v-if="imageInput"
      v-model="state.image"
      id="image"
      name="image"
      class="create-form__input"
    >
      <option v-for="image in images" :key="image.id" :value="image.id">{{
        image.id + ". " + image.url.split("file-bucket/")[1]
      }}</option>
    </select>
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
      @change="updateFile"
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
import { reactive, ref } from "vue";

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
    imageInput: {
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
      image: "",
      age: null,
      extra: "",
      file: "",
      status: "",
      errorText: false
    });

    const images = ref(null);
    const getImages = () => {
      axios
        .get(`http://localhost:4000/api/v1/assets`)
        .then(response => (images.value = response.data));
    };

    const postData = endpoint => {
      state.title = state.title
        .replace("æ", "%C3%A6")
        .replace("ø", "%C3%B8")
        .replace("å", "%C3%A5")
        .replace("Æ", "%C3%86")
        .replace("Ø", "%C3%98")
        .replace("Å", "%C3%85");
      state.content = state.content
        .replace("æ", "%C3%A6")
        .replace("ø", "%C3%B8")
        .replace("å", "%C3%A5")
        .replace("Æ", "%C3%86")
        .replace("Ø", "%C3%98")
        .replace("Å", "%C3%85");
      state.extra = state.extra
        .replace("æ", "%C3%A6")
        .replace("ø", "%C3%B8")
        .replace("å", "%C3%A5")
        .replace("Æ", "%C3%86")
        .replace("Ø", "%C3%98")
        .replace("Å", "%C3%85");

      state.errorText = false;
      if (props.adoptsection) {
        if (state.title === "" || state.content === "" || state.image === "") {
          state.errorText = true;
          state.status = "Udfyld venligst felterne";
          return;
        }
        axios
          .post(
            `http://localhost:4000/api/v1/${endpoint}`,
            `title=${state.title}&content=${state.content}&assetId=${state.image}`,
            { headers: { Authorization: `Bearer ${store.state.token}` } }
          )
          .then(response => {
            console.log(response);
            state.status = "Genstand oprettet!";
          })
          .catch(err => console.error(err));
      }
      if (props.about) {
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
      }
      if (props.animal) {
        if (
          state.title === "" ||
          state.content === "" ||
          state.age === null ||
          state.image === ""
        ) {
          state.errorText = true;
          state.status = "Udfyld venligst felterne";
          return;
        }
        axios
          .post(
            `http://localhost:4000/api/v1/${endpoint}`,
            `name=${state.title}&description=${state.content}&age=${state.age}&assetId=${state.image}`,
            { headers: { Authorization: `Bearer ${store.state.token}` } }
          )
          .then(response => {
            console.log(response);
            state.status = "Genstand oprettet!";
          })
          .catch(err => console.error(err));
      }
      if (props.asset) {
        if (!state.file.name || state.file == undefined) {
          state.errorText = true;
          state.status = "Vælg venligst en fil";
          return;
        }
        if (state.file.name.includes(" ")) {
          state.errorText = true;
          state.status = "Filnavn kan ikke indeholde mellemrum";
          return;
        }
        const form = new FormData();
        form.append("file", state.file, state.file.name);
        axios
          .post(`http://localhost:4000/api/v1/${endpoint}`, form, {
            headers: { Authorization: `Bearer ${store.state.token}` }
          })
          .then(response => {
            console.log(response);
            state.status = "Genstand oprettet!";
          })
          .catch(err => console.error(err));
      }
      if (props.volunteer) {
        if (state.title === "" || state.content === "" || state.image === "") {
          state.errorText = true;
          state.status = "Udfyld venligst felterne";
          return;
        }
        axios
          .post(
            `http://localhost:4000/api/v1/${endpoint}`,
            `title=${state.title}&content=${state.content}&extra=${state.extra}&assetId=${state.image}`,
            { headers: { Authorization: `Bearer ${store.state.token}` } }
          )
          .then(response => {
            console.log(response);
            state.status = "Genstand oprettet!";
          })
          .catch(err => console.error(err));
      }
      state.title = "";
      state.content = "";
      state.extra = "";
      state.age = null;
      state.file = "";
    };

    const updateFile = e => {
      state.file = e.target.files[0];
      console.log(state.file);
    };

    return {
      postData,
      state,
      updateFile,
      images,
      getImages
    };
  },

  created() {
    this.getImages();
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
