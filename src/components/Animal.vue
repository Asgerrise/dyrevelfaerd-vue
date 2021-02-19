<template>
  <router-link class="link" :to="'/details/' + id">
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
  </router-link>
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
    },
    id: {
      required: true,
      type: Number
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  border: 1px solid #e3e3e6;
  border-radius: 5px;
  overflow: hidden;

  @media screen and(max-width: 600px) {
    flex-direction: column;
  }

  &__image-container {
    flex: 1;
  }
  &__image {
    width: 100%;
    height: 100%;
    max-height: 270px;
    object-fit: cover;
  }
  &__text {
    flex: 2;
    padding: 1em;
    min-height: 270px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
.link {
  text-decoration: none;
  color: #333;
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.1);
  }
}
</style>
