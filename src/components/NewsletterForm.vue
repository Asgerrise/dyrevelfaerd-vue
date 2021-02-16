<template>
  <form @submit.prevent class="newsletter">
    <div class="newsletter__inputs">
      <input
        class="newsletter__input"
        name="email"
        type="text"
        placeholder="Email"
      />
      <input
        class="newsletter__input"
        name="name"
        type="text"
        placeholder="Navn"
      />
    </div>
    <button class="newsletter__button" type="submit">Tilmeld</button>
  </form>
</template>

<script>
export default {
  name: "NewsletterForm"
};
</script>

<style lang="scss" scoped>
.newsletter {
  width: 50%;
  text-align: end;
  margin-bottom: 3em;

  &__inputs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
  }
  &__input {
    width: 48%;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #e3e3e6;
    font-family: "Oswald", sans-serif;
    font-size: 1em;
    padding: 0.3em 0.5em;

    &::placeholder {
      opacity: 0.6;
      color: #333;
    }
  }
  &__button {
    font-family: "Oswald", sans-serif;
    font-size: 1em;
    background-color: #0080ff;
    border: none;
    padding: 0.5em 1em;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
