<template>
  <Hero />
  <main class="main">
    <Section>
      <Value
        v-for="item in abouts"
        :key="item.id"
        :title="item.title"
        :text="item.content"
      />
    </Section>
  </main>
</template>

<script>
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Value from "@/components/Value";
import { ref } from "vue";
const axios = require("axios");

export default {
  name: "Home",
  components: {
    Hero,
    Section,
    Value
  },
  setup() {
    const abouts = ref(null);
    const getAbouts = () => {
      axios
        .get("http://localhost:4000/api/v1/abouts")
        .then(response => (abouts.value = response.data));
    };
    return {
      abouts,
      getAbouts
    };
  },
  mounted() {
    this.getAbouts();
  }
};
</script>
