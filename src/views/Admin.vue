<template>
  <main class="admin">
    <div class="admin__wrapper">
      <h2 class="admin__title">Administrations panel</h2>
      <p class="admin__undertitle">Velkommen {{ $store.state.user }}!</p>

      <CreateForm
        subject="Opret ny adopt sektion"
        titleInput="Titel"
        contentInput="Indhold"
      />
      <CreateForm
        subject="Opret nyt 'about' afsnit"
        titleInput="Titel"
        contentInput="Indhold"
      />
      <CreateForm
        subject="Opret nyt dyr"
        titleInput="Titel"
        contentInput="Indhold"
        ageInput="Dage på internat"
      />
      <CreateForm subject="Upload billede" fileInput="Billede" />
      <CreateForm
        subject="Opret ny frivillig position"
        titleInput="Titel"
        contentInput="Indhold"
        extraInput="Ekstra"
      />
    </div>
  </main>
</template>

<script>
import CreateForm from "@/components/CreateForm";

export default {
  name: "Admin",
  components: {
    CreateForm
  }
};
</script>

<style lang="scss" scoped>
.admin {
  padding: 2em 0;
  &__wrapper {
    max-width: 1200px;
    margin: 0 auto;

    @media screen and(max-width: 1200px) {
      margin: 0 1em;
    }
  }
  &__title {
    font-size: 2.5em;
    font-weight: 400;
    color: #325792;
  }
  &__undertitle {
    font-size: 1.3em;
  }
}
</style>
