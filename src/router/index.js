import { createRouter,createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: 'home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/question',
            name: 'question',
            component: () => import('@/views/Question.vue'),
            children: [
                {
                    path: 'exercises',
                    name: 'exercises',
                    component: () => import('@/components/Exercises.vue')
                }
            ]
        },
        {
            path: '/employment',
            name: 'employment',
            component: () => import('@/views/Employment.vue')
        },
        {
            path: '/message',
            name: 'message',
            component: () => import('@/views/Message.vue')
        },
        {
            path: '/mine',
            name: 'mine',
            component: () => import('@/views/Mine.vue')
        }
    ]
});

export default router;