<template>
  <form @submit.prevent class="create-form">
    <h2 class="create-form__title">{{ subject }}</h2>
    <label v-if="titleInput" for="title" class="create-form__label"
      >{{ titleInput }}:</label
    >
    <input
      v-if="titleInput"
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
      id="content"
      name="content"
      class="create-form__input create-form__input_area"
    />
    <label v-if="ageInput" for="age" class="create-form__label"
      >{{ ageInput }}:</label
    >
    <input
      v-if="ageInput"
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
    <button class="create-form__button" type="submit">Opret</button>
  </form>
</template>

<script>
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
    }
  }
};
</script>

<style lang="scss" scoped>
.create-form {
  border-top: 2px solid #eee;
  display: flex;
  flex-direction: column;
  padding: 2em 2em 2em 0;
  margin-top: 2em;

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
    max-width: 40em;
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
  &__button {
    max-width: 40em;
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
