<template>
  <nav class="nav">
    <div class="nav__wrapper">
      <router-link to="/" class="nav__logo">
        <img class="nav__logo-img" src="@/assets/logo.png" alt="Logo" />
        <h1 class="nav__logo-text">Foreningen for Dyrevelfærd</h1>
      </router-link>
      <ul class="nav__links">
        <router-link to="/" class="nav__link">Hjem</router-link>
        <router-link to="/about" class="nav__link">Om os</router-link>
        <router-link to="/about" class="nav__link">Bliv Frivillig</router-link>
        <router-link to="/about" class="nav__link">Dyr i nød?</router-link>
        <router-link to="/about" class="nav__link">Adopter et dyr</router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>
.nav {
  padding: 1.5em 0;
  background-color: white;

  &__wrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @media screen and(max-width: 1200px) {
      margin: 0 1em;
    }
    @media screen and(max-width: 700px) {
      flex-direction: column;
      align-items: center;
    }
  }
  &__logo {
    display: flex;
    text-decoration: none;
    align-items: center;

    @media screen and(max-width: 700px) {
      margin-bottom: 1em;
    }

    &-img {
      margin-right: 1em;
      max-width: 40px;
      max-height: 40px;
    }
    &-text {
      font-size: 1.5em;
      color: #333;
      font-weight: 500;
      white-space: nowrap;
    }
  }
  &__links {
    display: flex;
    align-items: center;

    @media screen and(max-width: 520px) {
      flex-direction: column;
      margin-top: 1em;
    }
  }

  &__link {
    text-decoration: none;
    color: #333;
    margin-left: 1em;
    opacity: 0.5;
    white-space: nowrap;
    transition: 0.2s;

    &:nth-of-type(1) {
      margin-left: 0;
    }

    &:hover {
      opacity: 0.8;
    }

    @media screen and(max-width: 700px) {
      font-size: 1.4em;
    }
    @media screen and(max-width: 520px) {
      margin: 0 0 1em;
    }
  }
}

.router-link-active {
  opacity: 1;
}
</style>
