<template>
  <main class="subscribed">
    <div class="subscribed__wrapper">
      <h2 class="subscribed__text">Du er nu tilmeldt!</h2>
      <a href="/" class="subscribed__link">Klik her for at gå tilbage</a>
    </div>
  </main>
</template>

<script>
export default {
  name: "Subscribed"
};
</script>

<style lang="scss" scoped>
.subscribed {
  padding: 2em 0;
  align-self: center;

  &__wrapper {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    @media screen and(max-width: 1200px) {
      margin: 0 1em;
    }
  }
  &__text {
    font-size: 3em;
    color: #325792;
  }
  &__link {
    margin-top: 2em;
    display: block;
    color: #333;
    transition: 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
