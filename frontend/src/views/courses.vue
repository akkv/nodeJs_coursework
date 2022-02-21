<template>
  <main class="content">
    <section class="courses">
      <h2>Наши курсы</h2>
      <div v-if="!courses.length">Загрузка...</div>
      <ul v-else class="courses__list">
        <li class="course-card" v-for="(item, index) in courses" :key="index">
          <img class="course-card__image" :src="item.img" />
          <div class="course-card__wrap">
            <span>{{ item.date }}</span>
            <h3 class="course-card__title">{{ item.title }}</h3>
            <a class="link button" href="">Подробнее</a>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "Courses",
  data() {
    return {
      courses: [],
    };
  },
  mounted() {
    axios
      .get("/all_courses")
      .then((res) => {
        this.courses = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.courses {
  text-align: center;
}
.courses__list {
  list-style: none;
  padding: 0;
  gap: 10px;
}
.course-card {
  text-align: center;
  margin-bottom: 20px;
  gap: 10px;
}
.course-card__image {
  width: 60vw;
  max-width: 220px;
  height: auto;
  border-radius: 50%;
}
.course-card__title {
  text-transform: uppercase;
}
@media (min-width: 575.98px) {
  .courses {
    padding: 15px calc(50vw - 270px);
  }
  .course-card {
    display: flex;
  }
  .course-card__wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
@media (min-width: 767.98px) {
  .courses {
    padding: 15px calc(50vw - 360px);
  }
  .courses__list {
    display: flex;
    flex-wrap: wrap;
  }
  .course-card {
    flex: 1;
  }
}
@media (min-width: 991.98px) {
  .courses {
    padding: 15px calc(50vw - 480px);
  }
}
</style>
