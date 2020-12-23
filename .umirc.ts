import { defineConfig } from 'umi';

export default defineConfig({
	nodeModulesTransform: {
		type: 'none',
	},
	routes: [
		{ path: '/users', component: '@/pages/users/index' },
		{ path: '/', component: '@/pages/index' },
	],
});
