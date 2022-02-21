<template>
  <main class="content">
    <section class="advantages">
      <h2 class="display-none">Наши преимущества</h2>
      <ul class="advantages__list">
        <li class="advantages__item">
          <img
            class="advantages__image"
            src="@/assets/img/advantages_1.jpg"
            alt="Обучение оффлайн и онлайн"
          />
          <span class="advantages__title">Обучение оффлайн и онлайн</span>
        </li>
        <li class="advantages__item">
          <img
            class="advantages__image"
            src="@/assets/img/advantages_2.jpg"
            alt="Актуальные направления"
          />
          <span class="advantages__title">Актуальные направления</span>
        </li>
        <li class="advantages__item">
          <img
            class="advantages__image"
            src="@/assets/img/advantages_3.jpg"
            alt="Пошаговая система обучения"
          />
          <span class="advantages__title">Пошаговая система обучения</span>
        </li>
        <li class="advantages__item">
          <img
            class="advantages__image"
            src="@/assets/img/advantages_4.jpg"
            alt="Кураторы-профессионалы"
          />
          <span class="advantages__title">Кураторы-профессионалы</span>
        </li>
        <li class="advantages__item">
          <img
            class="advantages__image"
            src="@/assets/img/advantages_5.jpg"
            alt="Оформление портфолио"
          />
          <span class="advantages__title">Оформление портфолио</span>
        </li>
        <li class="advantages__item">
          <img
            class="advantages__image"
            src="@/assets/img/advantages_6.jpg"
            alt="Профессиональное комьюнити"
          />
          <span class="advantages__title">Профессиональное комьюнити</span>
        </li>
      </ul>
    </section>

    <section class="about">
      <h2>Школа рисунка и цифровой графики</h2>
      <p>Мы обучаем онлайн, в Санкт - Петербурге и Москве.</p>
      <p>
        Мы предлагаем профессиональные курсы рисования и CG по самым актуальным
        направлениям: Рисунок, 2D графика, 3D графика.
      </p>
      <p>
        Мы — не просто школа обучения рисованию. Вместе с вами мы создаем
        сообщество профессионалов, влюбленных в свое дело. Наша команда из
        преподавателей и студентов разделяет одну цель — рисовать много, классно
        и в удовольствие.
      </p>
    </section>
    <section class="works">
      <Splide :options="{ rewind: true }">
        <SplideSlide>
          <img src="@/assets/img/slide1.png" alt="Sample 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="@/assets/img/slide2.png" alt="Sample 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="@/assets/img/slide3.png" alt="Sample 3" />
        </SplideSlide>
        <SplideSlide>
          <img src="@/assets/img/slide4.png" alt="Sample 4" />
        </SplideSlide>
        <SplideSlide>
          <img src="@/assets/img/slide5.png" alt="Sample 5" />
        </SplideSlide>
        <SplideSlide>
          <img src="@/assets/img/slide6.png" alt="Sample 6" />
        </SplideSlide>
        <SplideSlide>
          <img src="@/assets/img/slide7.png" alt="Sample 7" />
        </SplideSlide>
      </Splide>
    </section>
  </main>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
export default {
  name: "Main",
  data() {
    return {};
  },
  components: {
    Splide,
    SplideSlide,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.link {
  text-decoration: none;
  color: inherit;
}
.button {
  background-color: black;
  color: white;
  padding: 5px 10px;
  border-radius: 2px;
}
.button:hover {
  background-color: #212121;
}
.button:active {
  background-color: #424242;
}
.display-none {
  display: none;
}
.about,
.advantages,
.works {
  padding: 15px 20px;
}
/* advantages */
.advantages {
  text-align: center;
}
.advantages__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
}
.advantages__image {
  max-width: 90px;
  height: auto;
}
.advantages__item {
  text-align: center;
  list-style: none;
}
.advantages__title {
  display: block;
}
/* about */
.about {
  background-color: black;
  color: white;
}
/* media */
@media (min-width: 575.98px) {
  .advantages,
  .about,
  .works {
    padding: 15px calc(50vw - 270px);
  }
}
@media (min-width: 767.98px) {
  .advantages,
  .about,
  .works {
    padding: 15px calc(50vw - 360px);
  }
}
@media (min-width: 991.98px) {
  .advantages,
  .works {
    padding: 15px calc(50vw - 480px);
  }
  .about {
    padding: 15px calc(50vw - 300px);
  }
  .advantages__list {
    flex-wrap: nowrap;
  }
}
</style>