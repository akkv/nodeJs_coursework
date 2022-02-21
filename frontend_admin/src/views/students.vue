<template>
  <section class="students">
    <h2>Заявки на обучение</h2>
    <table>
      <thead>
        <tr>
          <th>Имя</th>
          <th>E-mail</th>
          <th>Телефон</th>
          <th>Портфолио</th>
          <th>Статус</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in students" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.link }}</td>
          <td>{{ status(item.answer) }}</td>
          <td>
            <svg
              v-if="!item.answer"
              @click="sendMail(item)"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
              />
            </svg>
            <svg
              @click="deleteStudent(item._id)"
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
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "admin",
  data() {
    return {
      students: [],
    };
  },
  mounted() {
    this.getStudents();
  },
  methods: {
    getStudents() {
      axios
        .get("/all_students")
        .then((res) => {
          this.students = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    status(x) {
      if (x) return "Подвержден";
      else return "Не подтвержден";
    },
    deleteStudent(id) {
      axios
        .post("/delete_student", { id })
        .then(() => {
          this.getStudents();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendMail(student) {
      axios
        .post("/send_mail", { email: student.email })
        .then((res) => {
          if (res.status == 200) {
            this.editStatus(student._id)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editStatus(id) {
      axios
        .post("/edit_student_status", { id })
        .then(() => {
          this.getStudents();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
table,
form {
  margin-bottom: 20px;
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
  .students {
    padding: 15px calc(50vw - 270px);
  }
}
@media (min-width: 767.98px) {
.students {
    padding: 15px calc(50vw - 360px);
  }
}
@media (min-width: 991.98px) {
.students {
    padding: 15px calc(50vw - 480px);
  }
}
</style>
