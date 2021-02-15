<template>
  <header class="hero">
    <img
      class="hero__img"
      :src="kittenImg"
      alt="2 kittens looking at the camera"
    />
    <div class="hero__wrapper">
      <h1 class="hero__title">Foreningen for Dyrevelfærd</h1>
      <p class="hero__undertitle">Vi specialisere os i dyrevelfærd</p>
    </div>
  </header>
</template>

<script>
const axios = require("axios");
import { ref } from "vue";

export default {
  name: "Hero",
  setup() {
    const kittenImg = ref("");
    const getKittens = async () => {
      kittenImg.value = await axios
        .get("http://localhost:4000/api/v1/adoptsections")
        .then(response => {
          return response.data[0].asset.url;
        });
    };

    return {
      getKittens,
      kittenImg
    };
  },
  mounted() {
    this.getKittens();
  }
};
</script>

<style lang="scss" scoped>
.hero {
  color: white;
  padding: 3.5em 0 8em;

  &__img {
    position: absolute;
    top: -150px;
    left: 0;
    z-index: -1;
  }
  &__wrapper {
    margin: 0 auto;
    max-width: 1200px;
    @media screen and(max-width: 1200px) {
      margin: 0 1em;
    }
  }
  &__title {
    font-size: 4em;
    font-weight: 400;
  }
  &__undertitle {
    font-size: 1.45em;
  }
}
</style>
