import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/main.vue';
import Courses from '../views/courses.vue';
import Join from '../views/join.vue';
import News from '../views/news.vue';
import AdminAuth from '../views/admin_auth.vue';
const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/courses',
        component: Courses,
    },
    {
        path: '/join',
        component: Join,
    },
    {
        path: '/news',
        component: News,
    },
    {
        path: '/admin_auth',
        component: AdminAuth,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
