<template>
  <header
    v-if="!state.loading"
    class="hero"
    :style="{ backgroundImage: 'url(' + heroData.asset.url + ')' }"
  >
    <div class="hero__wrapper">
      <h1 class="hero__title">{{ heroData.title }}</h1>
      <p class="hero__undertitle">{{ heroData.content }}</p>
    </div>
  </header>
</template>

<script>
const axios = require("axios");
import { reactive, ref, watch } from "vue";

export default {
  name: "Hero",
  setup() {
    const state = reactive({
      loading: true
    });

    const heroData = ref(null);
    const getKittens = () => {
      axios
        .get("http://localhost:4000/api/v1/adoptsections/1")
        .then(response => (heroData.value = response.data));
    };

    watch(heroData, () => (state.loading = false));

    return {
      state,
      getKittens,
      heroData
    };
  },
  created() {
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
