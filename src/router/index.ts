import { createRouter, createWebHistory } from 'vue-router';
import AuthPage from '../views/AuthPage.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'auth',
			component: AuthPage,
		},
	],
});

export default router;
