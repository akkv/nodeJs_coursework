<template>
  <header class="header row wrap">
    <div class="logo header__logo col-6 col-md-4">
      <a href="/">
          <img
            class="logo__img"
            src="@/assets/img/logo-header-1.png"
            alt="DigitalSchool"
          />
      </a>
      <span class="logo__text">Школа рисунка и цифровой графики</span>
    </div>
    <div class="socials header__socials col-6 col-md-3">
      <a href="#"
        ><img class="socials__icon" src="@/assets/img/icon-inst.svg" alt="inst"
      /></a>
      <a href="#"
        ><img class="socials__icon" src="@/assets/img/icon-vk.svg" alt="vk"
      /></a>
      <a href="#"
        ><img class="socials__icon" src="@/assets/img/icon-fb.svg" alt="fb"
      /></a>
    </div>
    <div class="phone header__phone col-6 col-md-3">
      <div>
        <a class="phone__link link" href="tel:+79009998877">СПб: +7 900 999-88-77</a>
        <a class="phone__link link" href="tel:+79009998877">Мск: +7 900 999-88-77</a>
      </div>
    </div>
    <div class="header__menu-button col-6 col-md-2">
      <div class="menu-button__wrap" @click="openMenu">
        <span class="menu-button__text">Меню</span>
        <i class="fas fa-bars menu-button__icon"></i>
      </div>
    </div>
    <nav v-if="isOpen" class="header__menu col-12 col-md-12">
      <!-- <a class="link menu__link" href="#">Курсы</a> -->
      <router-link class="link menu__link" to="/courses">Курсы</router-link>
      <a class="link menu__link" href="#">Галерея</a>
      <router-link class="link menu__link" to="/news">Новости</router-link>
      <router-link class="link menu__link" to="/join">Записаться</router-link>
      <router-link class="link menu__link" to="/admin_auth">Вы администратор</router-link>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
.header {
  padding: 10px 20px;
  background-color: black;
  color: white;
  display: flex;
}
.header__logo {
  order: 1;
  min-width: 100px;
}
.header__socials {
  margin-top: 5px;
  order: 3;
  display: none;
}
.header__menu-button {
  order: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.header__menu {
  display: flex;
  order: 5;
  flex-direction: column;
  align-items: center;
}
.menu__link {
  margin-top: 10px;
  text-align: center;
  display: block;
}
.menu__link:hover {
  color: #424242;
}
.menu__link:active {
  color: #616161;
}
.header__phone {
  order: 4;
  display: none;
}

/* Logo */
.logo {
  display: flex;
  align-items: flex-end;
}
.logo__img {
  max-width: 200px;
}
.logo__text {
  display: none;
}
/* Sotials */
.socials__icon {
  max-width: 30px;
}
.socials__icon:hover {
  max-width: 33px;
  margin: -1.5px;
}
.header__socials {
  display: none;
}
/* Phone */
.phone__link {
  display: block;
}
/* open menu */
.menu-button__text {
  padding-right: 5px;
}
.menu-button__wrap {
  display: inline-flex;
  align-items: center;
}
.menu-button__wrap * {
  cursor: pointer;
}
.menu-button__wrap:hover .menu-button__icon,
.menu-button__wrap:hover .menu-button__text {
  font-size: 1.1rem;
  margin-right: -0.1rem;
  margin-top: -0.1rem;
}
.menu-button__wrap:active {
  color: #9e9e9e;
}

@media (min-width: 575.98px) {
  .header {
    padding: 10px calc(50vw - 270px);
  }
  .header__phone {
    display: flex;
    justify-content: flex-end;
  }
  .header__socials {
    display: block;
  }
}
@media (min-width: 767.98px) {
  .header,
  .footer {
    padding: 10px calc(50vw - 360px);
  }
  .header {
    margin-bottom: 0.5rem;
  }
  .header__logo {
    order: 1;
  }
  .header--open {
    box-shadow: 0 -20px 40px 20px rgba(0, 0, 0, 0.705);
  }
  .header__socials {
    order: 3;
    text-align: center;
  }
  .header__menu-button {
    order: 4;
  }
  .header__phone {
    order: 2;
  }
  .header__menu {
    order: 5;
    justify-content: space-between;
    flex-direction: row;
    color: black;
    position: absolute;
    right: calc(50vw - 360px);
    left: calc(50vw - 360px);
    margin-top: 40px;
  }
  .header__phone {
    justify-content: flex-start;
  }
}
@media (min-width: 991.98px) {
  .header,
  .footer {
    padding: 10px calc(50vw - 480px);
  }
  .logo {
    display: block;
  }
  .logo__text {
    display: block;
  }
  .header__phone {
    align-items: center;
  }
  .header__socials {
    margin-top: 10px;
  }
  .header__menu {
    right: calc(50vw - 480px);
    left: calc(50vw - 480px);
    margin-top: 55px;
  }
}
</style>