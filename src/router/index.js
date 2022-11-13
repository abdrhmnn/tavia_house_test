import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		component: () => import("../components/LoginPage.vue"),
	},
	{
		path: "/profile",
		component: () => import("../components/ProfileSection.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
