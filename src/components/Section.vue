<template>
  <section class="section" :class="{ blue: isBlue }">
    <div class="section__wrapper">
      <h2 v-if="headline" class="section__headline">{{ headline }}</h2>
      <ul class="item-list">
        <slot />
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Section",
  props: {
    isBlue: {
      required: false,
      type: Boolean,
      default: false
    },
    headline: {
      required: false,
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  background-color: white;
  padding: 0.7em 0 1.8em;

  &.blue {
    background-color: #e2edff;
  }
  &__headline {
    font-size: 2em;
    color: #325792;
    font-weight: 400;
    margin-bottom: 0.5em;
  }
  &__wrapper {
    max-width: 1200px;
    margin: 0 auto;
    @media screen and(max-width: 1200px) {
      margin: 0 1em;
    }
  }
  .item-list {
    display: flex;
    justify-content: space-between;
  }
}
</style>
