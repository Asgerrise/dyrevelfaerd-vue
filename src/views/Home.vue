<template>
  <Hero />
  <main class="main">
    <Section>
      <Value
        v-for="item in abouts"
        :key="item.id"
        :title="item.id === 1 ? item.title : item.title.toUpperCase()"
        :text="item.content"
      />
    </Section>

    <Section :isBlue="true" headline="Bliv Frivillig">
      <Card
        v-for="item in volunteers"
        :key="item.id"
        :title="item.title"
        :text="item.content"
        :image="item.asset.url"
        :extra="item.extra"
      />
    </Section>
  </main>
</template>

<script>
import { ref } from "vue";
const axios = require("axios");

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Value from "@/components/Value";
import Card from "@/components/Card";

export default {
  name: "Home",
  components: {
    Hero,
    Section,
    Value,
    Card
  },
  setup() {
    const abouts = ref(null);
    const getAbouts = () => {
      axios
        .get("http://localhost:4000/api/v1/abouts")
        .then(response => (abouts.value = response.data));
    };

    const volunteers = ref(null);
    const getVolunteers = () => {
      axios
        .get("http://localhost:4000/api/v1/volunteers")
        .then(response => (volunteers.value = response.data));
    };

    return {
      abouts,
      getAbouts,
      volunteers,
      getVolunteers
    };
  },
  mounted() {
    this.getAbouts();
    this.getVolunteers();
  }
};
</script>
