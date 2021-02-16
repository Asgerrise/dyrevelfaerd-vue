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
    <Section :isBlue="true" headline="Tilmeld vores nyhedsbrev">
      <p class="newsletter__text">
        Få inspiration og nyheder om dyrevelfærd og vores arbejde, direkte i din
        indbakke
      </p>
      <NewsletterForm />
    </Section>
    <SectionImage
      :title="adoptSections[2].title"
      :undertitle="adoptSections[2].content"
      :image="adoptSections[2].asset.url"
    />
    <Section
      headline="Dyr hos os"
      :bigHeadline="true"
      :undertitle="animals.length + ' dyr'"
      :gridAuto="true"
    >
      <Animal
        v-for="item in animals"
        :key="item.id"
        :image="item.asset.url"
        :name="item.name"
        :description="item.description"
        :age="item.age.toString()"
      />
    </Section>
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
import NewsletterForm from "@/components/NewsletterForm";
import Animal from "@/components/Animal";

export default {
  name: "Home",
  components: {
    Hero,
    Section,
    Value,
    Card,
    SectionImage,
    NewsletterForm,
    Animal
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

    const animals = ref(null);
    const getAnimals = () => {
      axios
        .get("http://localhost:4000/api/v1/animals")
        .then(response => (animals.value = response.data));
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
      animals,
      getAnimals,
      setLoading
    };
  },
  created() {
    this.getAbouts();
    this.getVolunteers();
    this.getAdoptSections();
    this.getAnimals();
  },
  mounted() {
    setTimeout(() => {
      this.setLoading();
    }, 100);
  }
};
</script>

<style lang="scss" scoped>
.newsletter__text {
  flex: 1;
}
</style>
