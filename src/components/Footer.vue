<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <ul class="footer__column">
        <h2 class="footer__column-title">KONTAKT</h2>
        <li class="footer__item">Tornebuskvej 22, 1.</li>
        <li class="footer__item">1131 København K</li>
        <li class="footer__item">CVR: 22446187</li>
        <li class="footer__item">
          Husk at du kan få fradrag for donationer på op til 16.600 kr.
        </li>
      </ul>
      <ul class="footer__column copyright">
        <li class="footer__item">© 2020 - Foreningen for Dyrevelfærd</li>
      </ul>
      <ul class="footer__column">
        <h2 class="footer__column-title">PARTNERE</h2>
        <li class="footer__item">
          <a href="https://anima.dk/" target="_blank" class="footer__link"
            >Anima</a
          >
        </li>
        <li class="footer__item">
          <a
            href="https://www.worldanimalprotection.dk/"
            target="_blank"
            class="footer__link"
            >World Animal Protection</a
          >
        </li>
        <li class="footer__item">
          <a
            href="https://www.foedevarestyrelsen.dk/Sider/forside.aspx"
            target="_blank"
            class="footer__link"
            >Fødevarestyrelsen</a
          >
        </li>
        <li class="footer__item">
          <a href="https://faktalink.dk/" target="_blank" class="footer__link"
            >Faktalink</a
          >
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #e2edff;
  padding: 1.5em 0;

  &__wrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @media screen and(max-width: 1200px) {
      margin: 0 1em;
    }
    @media screen and(max-width: 600px) {
      flex-direction: column;
    }
  }
  &__column {
    flex: 1;
    list-style: none;
    margin-right: 4em;

    &:nth-last-of-type(1) {
      margin-right: 0;
    }

    @media screen and(max-width: 600px) {
      margin-right: 0;
      margin-bottom: 1.5em;
    }
  }
  &__column-title {
    font-size: 1.4em;
    font-weight: 400;
    margin-bottom: 0.3em;
  }
  &__item {
    font-size: 1em;
    margin-bottom: 0.2em;
  }
  &__link {
    text-decoration: none;
    color: #41a1ce;
  }

  .copyright {
    align-self: flex-end;
    text-align: center;

    @media screen and(max-width: 600px) {
      text-align: left;
      align-self: flex-start;
      order: 3;
    }
  }
}
</style>
