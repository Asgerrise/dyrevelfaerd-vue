<template>
  <article class="card">
    <div>
      <h2 class="card__title">{{ title }}</h2>
      <img class="card__image" :src="image" :alt="title" />
      <p class="card__text">{{ text }}</p>
    </div>
    <p class="card__extra">{{ extra }}</p>
  </article>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: {
      required: true,
      type: String
    },
    image: {
      required: true,
      type: String
    },
    text: {
      required: true,
      type: String
    },
    extra: {
      required: false,
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 31%;
  background: white;
  border: solid 2px #e3e3e6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 45em;

  &__title {
    font-size: 1.1em;
    font-weight: 400;
    padding: 0.8em 1em;
    text-transform: uppercase;
    background-color: #f0f0f0;
    border-bottom: solid 2px #e3e3e6;
  }
  &__image {
    width: 100%;
    padding: 1em;
  }
  &__text {
    padding: 0 1em;
  }
  &__extra {
    padding: 0.8em 1em;
    background-color: #f0f0f0;
    border-top: solid 2px #e3e3e6;
    font-style: italic;
    opacity: 0.7;
  }
}
</style>
