import { createRouter, createWebHashHistory } from 'vue-router';
import Main from './views/Main.vue';
// import Chat from "./views/Chat.vue";
// import Subscriptions from "./views/Subscriptions.vue";
// import Contract from "./views/Contract.vue";
// import Wallet from "./views/Wallet.vue";
// import Setting from "./views/Setting.vue";

// const mainRouters = [
// 	{
// 		path: '/home/chat',
// 		name: 'chat',
// 		component: Chat,
// 	},
// 	{
// 		path: '/home/subscriptions',
// 		name: 'subscriptions',
// 		component: Subscriptions,
// 	},
// 	{
// 		path: '/home/contract',
// 		name: 'contract',
// 		component: Contract,
// 	},
// 	{
// 		path: '/home/wallet',
// 		name: 'wallet',
// 		component: Wallet,
// 	},
// 	{
// 		path: '/home/setting',
// 		name: 'setting',
// 		component: Setting,
// 	},
// ];

const routes = [
	{
		path: '/',
		name: 'Main',
		component: Main,
		default: true,
		// children: mainRouters,
	},
];

export default createRouter({
	routes,
	history: createWebHashHistory(),
});
