<template>
  <section class="section" :class="{ blue: isBlue }">
    <div class="section__wrapper">
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
  &__wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }
  .item-list {
    display: flex;
    justify-content: space-between;
  }
}
</style>
