<template>
  <div class="nav">
    <div>
      <router-link to="/edit">Редактировать</router-link> |
      <router-link to="/students">Заявки на обучение</router-link>
    </div>
    <span class="exit" @click="exit"
      >Выйти
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"
        /></svg
    ></span>
  </div>
</template>
<script>
import axios from "axios";
export default {
  methods: {
    exit() {
      axios
        .get("/exit")
        .then(() => {
          document.location.href = "/";
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #9e9e9e;
  height: 40px;
  padding: 0 10px;
}
.exit {
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
