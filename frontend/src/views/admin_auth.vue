<template>
  <main class="content">
    <section class="form">
      <input type="text" placeholder="Логин" v-model="auth.login"/>
      <input type="password" placeholder="Пароль" v-model="auth.pass"/>
      <input class="button" type="button" value="Войти" @click="sendAuth"/>
    </section>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "AdminAuth",
  data() {
    return {
      auth: {
        login: "",
        pass: "",
      },
    };
  },
  methods: {
    sendAuth() {
      console.log(this.auth)
      axios
        .post("/auth", this.auth)
        .then((res) => {
          if (res.status == 200) {
            document.location.href = '/admin';
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  margin-top: 100px;
}
.form input {
  margin-bottom: 5px;
}
</style>