import { createRouter, createWebHistory } from 'vue-router'
import Edit from '../views/edit.vue'
import Students from '../views/students.vue'

const routes = [
  {
    path: '/',
    alias: '/edit',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/students',
    name: 'Students',
    component: Students
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
