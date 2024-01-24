import { createRouter, createWebHistory } from 'vue-router';
import baseRouters from './modules/base';

const routes = [...baseRouters];

const router = createRouter({
	history: createWebHistory(),
	base: '/webpack-vue-template/',
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		}
		return {
			el: '#app',
			top: 0,
			behavior: 'smooth', // 滚动的行为，可以是 'auto'、'smooth' 或 'instant'
		};
	},
});

export default router;
