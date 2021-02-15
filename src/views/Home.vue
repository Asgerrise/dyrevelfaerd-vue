<template>
  <Hero />
  <main class="main">
    <Section />
  </main>
</template>

<script>
import Hero from "@/components/Hero";
import Section from "@/components/Section";

export default {
  name: "Home",
  components: {
    Hero,
    Section
  }
};
</script>
