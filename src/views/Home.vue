<template>
  <Hero />
  <main class="main" v-if="!state.loading">
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
    <SectionImage
      :title="adoptSections[1].title"
      :undertitle="adoptSections[1].content"
      :image="adoptSections[1].asset.url"
    />
  </main>
  <main v-else><h1>Loading...</h1></main>
</template>

<script>
import { ref, reactive } from "vue";
const axios = require("axios");

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Value from "@/components/Value";
import Card from "@/components/Card";
import SectionImage from "@/components/SectionImage";

export default {
  name: "Home",
  components: {
    Hero,
    Section,
    Value,
    Card,
    SectionImage
  },
  setup() {
    const state = reactive({
      loading: true
    });

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

    const adoptSections = ref(null);
    const getAdoptSections = () => {
      axios
        .get("http://localhost:4000/api/v1/adoptsections")
        .then(response => (adoptSections.value = response.data));
    };

    const setLoading = () => {
      state.loading = false;
    };

    return {
      state,
      abouts,
      getAbouts,
      volunteers,
      getVolunteers,
      adoptSections,
      getAdoptSections,
      setLoading
    };
  },
  created() {
    this.getAbouts();
    this.getVolunteers();
    this.getAdoptSections();
  },
  mounted() {
    this.setLoading();
  }
};
</script>
