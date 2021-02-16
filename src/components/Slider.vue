<template>
  <vueper-slides
    autoplay
    fixedHeight="500px"
    :visible-slides="2"
    :gap="5"
    class="no-shadow"
    :arrows="false"
    :breakpoints="breakpoints"
  >
    <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "Slider",
  components: {
    VueperSlides,
    VueperSlide
  },
  setup() {
    const slides = [
      {
        title: "Corgi",
        image: require("@/assets/corgi1.jpg")
      },
      {
        title: "Corgi",
        image: require("@/assets/corgi2.jpg")
      },
      {
        title: "Corgi",
        image: require("@/assets/corgi3.jpg")
      },
      {
        title: "Corgi",
        image: require("@/assets/corgi4.jpg")
      },
      {
        title: "Corgi",
        image: require("@/assets/corgi5.jpg")
      },
      {
        title: "Corgi",
        image: require("@/assets/corgi6.jpg")
      }
    ];
    const breakpoints = {
      900: {
        visibleSlides: 1
      }
    };

    return {
      slides,
      breakpoints
    };
  }
};
</script>

<style lang="scss">
.vueperslides {
  margin-top: 2em;
  margin-bottom: 2em;
}
</style>
