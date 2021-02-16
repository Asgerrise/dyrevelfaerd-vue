<template>
  <li class="card">
    <div class="card__image-container">
      <img class="card__image" :src="image" :alt="name" />
    </div>
    <div class="card__text">
      <h3 class="card__name">{{ name }}</h3>
      <p class="card__description">{{ description }}</p>
      <p class="card__extra">Været på internatet i {{ age }} dage</p>
    </div>
  </li>
</template>

<script>
export default {
  name: "Animal",
  props: {
    image: {
      required: true,
      type: String
    },
    name: {
      required: true,
      type: String
    },
    description: {
      required: true,
      type: String
    },
    age: {
      required: true,
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  border: 1px solid #e3e3e6;
  border-radius: 5px;

  &__image-container {
    flex: 1;
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__text {
    flex: 2;
    padding: 1em;
  }
  &__name {
    font-size: 1.4em;
    font-weight: 400;
    margin-bottom: 0.5em;
  }
  &__description {
    font-size: 1.2em;
    margin-bottom: 1em;
  }
  &__extra {
    font-size: 0.9em;
    opacity: 0.7;
  }
}
</style>
