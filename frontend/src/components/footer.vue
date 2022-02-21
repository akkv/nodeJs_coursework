<template>
  <footer class="footer row">
    <div class="col-3 footer__socials-wrap">
      <img
        src="@/assets/img/logo-header-1.png"
        alt="DigitalSchool"
        class="footer__logo"
      />
      <div class="footer__socials">
        <a class="link footer__socials-link" href="#">
          <img
            class="socials__icon socials__icon--invert"
            src="@/assets/img/icon-inst.svg"
            alt="inst"
        /></a>
        <a class="link footer__socials-link" href="#">
          <img
            class="socials__icon socials__icon--invert"
            src="@/assets/img/icon-vk.svg"
            alt="vk"
        /></a>
        <a class="link footer__socials-link" href="#">
          <img
            class="socials__icon socials__icon--invert"
            src="@/assets/img/icon-fb.svg"
            alt="fb"
        /></a>
      </div>
    </div>
    <div>
      <span>Санкт-Петербург, ул. Петербургская, д. 1</span>
      <a class="link footer__phone" href="tel:+79009998877">+7 900 999-88-77</a>
    </div>
    <div>
      <span>Москва, ул. Московская, д. 1</span>
      <a class="link footer__phone" href="tel:+79009998877">+7 900 999-88-77</a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.footer {
  background-color: black;
  color: white;
  position: relative;
}
.footer__socials-wrap {
  text-align: center;
}
.footer__logo {
  min-width: 120px;
  max-width: 180px;
}
.socials__icon--invert {
  filter: invert(1);
}

.footer__socials-link {
  background-color: white;
  width: 33px;
  height: 33px;
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
}
.footer__socials-link:not(:first-child) {
  margin-top: 3px;
}
.footer__socials {
  position: absolute;
  top: 15px;
  right: 20px;
}
.footer__phone {
  display: block;
}
.footer {
  padding: 20px 20px;
}

@media (min-width: 575.98px) {
  .footer {
    padding: 20px calc(50vw - 270px);
  }
  .footer__socials {
    padding-right: calc(50vw - 270px);
  }
}
@media (min-width: 767.98px) {
  .header,
  .footer {
    padding: 10px calc(50vw - 360px);
  }
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer__logo {
    max-width: 150px;
  }
  .footer__socials {
    padding-right: 0;
    position: static;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .footer__socials-link:first-child {
    margin-top: 3px;
  }
}
@media (min-width: 991.98px) {
  .header,
  .footer {
    padding: 10px calc(50vw - 480px);
  }
  .footer__logo {
    max-width: 180px;
  }
}
</style>