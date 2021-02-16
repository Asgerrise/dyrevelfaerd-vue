<template>
  <section class="section" :class="{ blue: isBlue }">
    <div class="section__wrapper">
      <h2
        v-if="headline"
        class="section__headline"
        :class="{ section__headline_big: bigHeadline }"
      >
        {{ headline }}
      </h2>
      <h3 v-if="undertitle" class="section__undertitle">
        {{ undertitle }}
      </h3>
      <ul class="item-list" :class="{ 'item-list_grid': grid }">
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
    },
    bigHeadline: {
      required: false,
      type: Boolean,
      default: false
    },
    undertitle: {
      required: false,
      type: String
    },
    grid: {
      required: false,
      type: Boolean,
      default: false
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

    &_big {
      font-size: 3.5em;
      margin-bottom: 0em;
    }
  }
  &__undertitle {
    font-size: 1.4em;
    font-weight: 400;
    margin-bottom: 1.5em;
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

    &_grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      gap: 3em 2em;
    }
  }
}
</style>
