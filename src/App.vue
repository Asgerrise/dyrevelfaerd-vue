<template>
  <Nav />
  <router-view />
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: "App",
  components: {
    Nav
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Oswald", sans-serif;
  color: #333;
}
</style>
