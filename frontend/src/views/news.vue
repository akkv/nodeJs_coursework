<template>
  <main class="content">
    <section class="news">
      <h2>Новости школы</h2>
      <div v-if="!news.length">Загрузка...</div>
      <div class="news__list">
        <div class="news-card" v-for="(item, index) in news" :key="index">
          <img :src="item.img" alt="" class="news-card__image" />
          <span>{{ item.date }}</span>
          <h4>{{ item.title }}</h4>
          <p>{{ item.description }}</p>
          <a href="#" class="button link news-card__button">Подробнее</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "News",
  data() {
    return {
      news: [],
    };
  },
  mounted() {
    axios
      .get("/all_news")
      .then((res) => {
        this.news = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.news {
  margin-bottom: 20px;
  text-align: center;
}
.news__list {
  flex-wrap: wrap;
  gap: 10px;
}
.news-card {
  padding: 10px;
  background-color: #eeeeee;
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
}
.news-card__image {
  width: 100%;
  margin-bottom: 10px;
}
.news-card__button {
  text-align: center;
  display: block;
}
/* media */
@media (min-width: 575.98px) {
  .news {
    padding: 0 calc(50vw - 270px);
  }
}
@media (min-width: 767.98px) {
  .news {
    padding: 0 calc(50vw - 360px);
  }
  .news__list {
    display: flex;
  }
  .news__title {
    flex: 100%;
    margin-top: 20px;
  }
  .news-card {
    flex: 30%;
  }
}
@media (min-width: 991.98px) {
  .news {
    padding: 0 calc(50vw - 480px);
  }
}
</style>
