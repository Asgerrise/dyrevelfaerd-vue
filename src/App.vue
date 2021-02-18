<template>
  <Nav />
  <router-view />
  <Footer />
</template>

<script>
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import store from "@/store/index.js";

store.dispatch("getToken");

export default {
  name: "App",
  components: {
    Nav,
    Footer
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
