import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{ path: '/', component: () => import('@/views/index.vue') },
	{ path: '/:pathMatch(.*)*', component: () => import('@/views/404.vue') },
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
