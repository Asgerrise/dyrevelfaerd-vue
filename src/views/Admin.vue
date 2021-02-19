<template>
  <main class="admin">
    <div class="admin__wrapper">
      <h2 class="admin__title">Administrations panel</h2>
      <p class="admin__undertitle">Velkommen {{ $store.state.user }}!</p>
      <section class="admin__section">
        <CreateForm
          subject="Opret ny adopt sektion"
          titleInput="Titel"
          contentInput="Indhold"
          imageInput="Billede"
          :adoptsection="true"
          endpoint="adoptsections"
        />
        <DeleteForm subject="Slet adopt sektion" endpoint="adoptsections" />
      </section>
      <section class="admin__section">
        <CreateForm
          subject="Opret nyt 'about' afsnit"
          titleInput="Titel"
          contentInput="Indhold"
          :about="true"
          endpoint="abouts"
        />
        <DeleteForm subject="Slet 'about' afsnit" endpoint="abouts" />
      </section>
      <section class="admin__section">
        <CreateForm
          subject="Opret nyt dyr"
          titleInput="Titel"
          contentInput="Indhold"
          ageInput="Dage på internat"
          imageInput="Billede"
          :animal="true"
          endpoint="animals"
        />
        <DeleteForm subject="Slet et dyr" endpoint="animals" />
      </section>
      <section class="admin__section">
        <CreateForm
          subject="Opret nyt billede"
          fileInput="Vælg fil"
          :asset="true"
          endpoint="assets"
        />
      </section>
      <section class="admin__section">
        <CreateForm
          subject="Opret ny frivillig position"
          titleInput="Titel"
          contentInput="Indhold"
          extraInput="Ekstra"
          imageInput="Billede"
          :volunteer="true"
          endpoint="volunteers"
        />
        <DeleteForm subject="Slet frivillig position" endpoint="volunteers" />
      </section>
    </div>
  </main>
</template>

<script>
import CreateForm from "@/components/CreateForm";
import DeleteForm from "@/components/DeleteForm";

export default {
  name: "Admin",
  components: {
    CreateForm,
    DeleteForm
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
  &__section {
    border-top: 2px solid #eee;
    padding: 2em 0;
    margin-top: 2em;
    display: flex;
    justify-content: space-between;

    @media screen and(max-width: 700px) {
      flex-direction: column;
    }
  }
}
</style>
