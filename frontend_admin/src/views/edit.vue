<template>
  <section class="edit">

    <h2>Новости</h2>
    <table>
      <thead>
        <tr>
          <th>Название</th>
          <th>Даты</th>
          <th>Описание</th>
          <th>Картинка</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in news" :key="index">
          <td>{{ item.title }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.img }}</td>
          <td>
            <svg
              @click="deleteNews(item._id)"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
              />
            </svg>
          </td>
        </tr>
      </tbody>
    </table>

    <h2>Курсы</h2>
    <table>
      <thead>
        <tr>
          <th>Название</th>
          <th>Даты</th>
          <th>Описание</th>
          <th>Стоимость</th>
          <th>Картинка</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in courses" :key="index">
          <td>{{ item.title }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.img }}</td>
          <td>
            <svg
              @click="deleteCourse(item._id)"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
              />
            </svg>
          </td>
        </tr>
      </tbody>
    </table>

    <form class="form">
      <select name="" id="" v-model="type">
        <option value="news" selected>Новость</option>
        <option value="course">Курс</option>
      </select>
      <input type="text" v-model="data.title" placeholder="Название" />
      <input type="date" v-model="data.date" placeholder="Дата" />
      <input
        v-if="type == 'course'"
        v-model="price"
        type="text"
        placeholder="Стоимость"
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Описание"
        v-model="data.description"
      ></textarea>
      <input
        v-if="type == 'news'"
        type="button"
        value="Добавить новость"
        @click="addNews"
      />
      <input v-else type="button" value="Добавить курс" @click="addCourse" />
    </form>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "admin",
  data() {
    return {
      news: [],
      courses: [],
      type: "",
      data: {
        title: "",
        date: "",
        description: "",
      },
      price: "",
    };
  },
  mounted() {
    this.getNews();
    this.getCourses();
  },
  methods: {
    deleteNews(id) {
      axios
        .post("/delete_news", { id })
        .then(() => {
          this.getNews();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getNews() {
      axios
        .get("/all_news")
        .then((res) => {
          this.news = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteCourse(id) {
      axios
        .post("/delete_course", { id })
        .then(() => {
          this.getCourses();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCourses() {
      axios
        .get("/all_courses")
        .then((res) => {
          this.courses = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addCourse() {
      let data = {};
      Object.assign(data, this.data);
      data.price = this.price;
      axios
        .post("/add_course", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.clear();
      this.getCourses();
    },
    addNews() {
      axios
        .post("/add_news", this.data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.clear();
      this.getNews();
    },
    clear() {
      this.data.title = "";
      this.data.date = "";
      this.data.description = "";
      this.price = "";
    },
  },
};
</script>

<style>
table,
form {
  margin-bottom: 20px;
}
.form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
}
.form input,
.form select,
.form textarea {
  margin-bottom: 5px;
}
table {
  width: 100%;
}
thead {
  background-color: #9e9e9e;
}
tbody tr:nth-child(even) {
  background-color: #eeeeee;
}
@media (min-width: 575.98px) {
  .edit {
    padding: 15px calc(50vw - 270px);
  }
}
@media (min-width: 767.98px) {
.edit {
    padding: 15px calc(50vw - 360px);
  }
}
@media (min-width: 991.98px) {
.edit {
    padding: 15px calc(50vw - 480px);
  }
}
</style>
