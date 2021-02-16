<template>
  <section
    class="section-image"
    :style="{ backgroundImage: 'url(' + image + ')' }"
  >
    <div class="section-image__wrapper">
      <h1 class="section-image__title">{{ title }}</h1>
      <p class="section-image__undertitle">{{ undertitle }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionImage",
  props: {
    title: {
      required: true,
      type: String
    },
    undertitle: {
      required: true,
      type: String
    },
    image: {
      required: true,
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.section-image {
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
    font-size: 3.7em;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 1;
    margin-bottom: 0.2em;
  }
  &__undertitle {
    font-size: 1.3em;
  }
}
</style>
