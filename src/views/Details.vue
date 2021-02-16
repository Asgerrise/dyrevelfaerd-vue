<template>
  <div v-if="!state.loading" class="details">
    <div class="details__wrapper">
      <img :src="data.asset.url" :alt="data.name" class="details__img" />
      <h2 class="details__name">{{ data.name }}</h2>
      <p class="details__text">{{ data.description }}</p>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import router from "@/router/index.js";
const axios = require("axios");
import { reactive, ref, watch } from "vue";

export default {
  name: "Details",
  setup() {
    const state = reactive({
      loading: true
    });

    const id = router.currentRoute._value.params.id;
    const data = ref(null);
    const getData = () => {
      axios
        .get(`http://localhost:4000/api/v1/animals/${id}`)
        .then(response => (data.value = response.data));
    };

    watch(data, () => (state.loading = false));

    return {
      state,
      data,
      getData
    };
  },

  created() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
.details {
  margin: 3em 0;

  &__wrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    @media screen and(max-width: 1200px) {
      margin: 0 1em;
    }
  }
  &__img {
    border-radius: 5px;
    align-self: center;
    width: auto;
    max-width: 100%;
  }
  &__name {
    font-size: 3em;
    color: #325792;
    font-weight: 400;
  }
  &__text {
    font-size: 1.4em;
  }
}
</style>
