<template>
  <header class="hero" :style="{ backgroundImage: 'url(' + kittenImg + ')' }">
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
    const kittenImg = ref(null);
    const getKittens = () => {
      axios
        .get("http://localhost:4000/api/v1/adoptsections")
        .then(response => (kittenImg.value = response.data[0].asset.url));
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
  background-position: center;
  background-size: cover;

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
    line-height: 1;
    margin-bottom: 0.2em;
  }
  &__undertitle {
    font-size: 1.45em;
  }
}
</style>
