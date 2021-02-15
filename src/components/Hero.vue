<template>
  <header class="hero">
    <img
      class="hero__img"
      :src="kittenImg"
      alt="2 kittens looking at the camera"
    />
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
  &__img {
    position: absolute;
    top: 0;
    z-index: -1;
  }
}
</style>
