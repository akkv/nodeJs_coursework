<template>
  <main class="content">
    <section class="join">
      <div>
        <div>
          <h1>Записаться на курс</h1>
          <p>
            Пожалуйста, внимательно заполните форму справа. Мы свяжемся с вами,
            чтобы подтвердить заявку и обсудить организационные вопросы.
            Спасибо!
          </p>
        </div>
        <form class="join__form" action="post">
          <input
            name="name"
            class="form__name"
            type="text"
            placeholder="Ваши фамилия и имя *"
            required
            v-model="form.name"
          />
          <input
            name="email"
            class="form__email"
            type="email"
            placeholder="Электронная почта *"
            required
            v-model="form.email"
          />
          <input
            name="phone"
            class="form__phone"
            type="number"
            placeholder="Ваш телефон *"
            required
            v-model="form.phone"
          />
          <input
            name="link"
            class="form__link"
            type="text"
            placeholder="Ссылка на портфолио"
            v-model="form.link"
          />
          <label class="form__check">
            <input type="checkbox" name="conditions" required />
            Я согласен с условиями обработки данных
          </label>
          <button class="button sendButton" @click.prevent="sendForm">
            Записаться на курс
          </button>
        </form>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "Join",
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        link: "",
      },
    };
  },
  methods: {
    sendForm() {
      axios
        .post("/send_form", this.form)
        .then(() => {
          this.clear();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    clear() {
      this.form.name = "";
      this.form.email = "";
      this.form.phone = "";
      this.form.link = "";
    },
  },
};
</script>

<style>
.content {
  flex-basis: 100%;
}
.join {
  padding: 0 20px;
}
.join__form {
  text-align: center;
}
.form__name,
.form__email,
.form__phone,
.form__link {
  width: 100%;
  margin-bottom: 10px;
}
.form__check {
  margin-bottom: 20px;
  display: block;
}
@media (min-width: 575.98px) {
  .join {
    padding: 0 calc(50vw - 270px);
  }
}
@media (min-width: 767.98px) {
  .join {
    padding: 0 calc(50vw - 300px);
  }
}
</style>
