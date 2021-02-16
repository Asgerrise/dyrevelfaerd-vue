<template>
  <article class="value">
    <h2 class="value__title">{{ title }}</h2>
    <p class="value__text">{{ text }}</p>
  </article>
</template>

<script>
export default {
  name: "Value",
  props: {
    title: {
      required: true,
      type: String
    },
    text: {
      required: true,
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.value {
  &__title {
    font-size: 1.5em;
    color: #325792;
    font-weight: 400;
    margin-bottom: 0.2em;
  }
}
</style>
