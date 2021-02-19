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
      <ul
        v-if="!noGrid"
        class="item-list"
        :class="{ 'item-list_grid-auto': gridAuto }"
      >
        <slot />
      </ul>
      <slot v-if="noGrid" />
      <button v-if="button" class="button" @click="showHideAnimals">
        {{ buttonText }}
      </button>
    </div>
  </section>
</template>

<script>
import store from "@/store/index.js";
import { computed } from "vue";

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
    gridAuto: {
      required: false,
      type: Boolean,
      default: false
    },
    noGrid: {
      required: false,
      type: Boolean,
      default: false
    },
    button: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  setup() {
    const buttonText = computed(() =>
      store.state.showAllAnimals ? "Vis færre dyr" : "Vis alle dyr"
    );

    const showHideAnimals = () => {
      store.commit("SET_SHOW_ALL_ANIMALS");
    };

    return {
      buttonText,
      showHideAnimals
    };
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2em;

    &_grid-auto {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      gap: 3em 2em;

      @media screen and(max-width: 520px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }
    }
  }
  .button {
    margin: 2em auto 1em;
    display: block;
    font-family: "Oswald", sans-serif;
    font-size: 1em;
    background-color: #325792;
    border: none;
    padding: 0.5em 1em;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
