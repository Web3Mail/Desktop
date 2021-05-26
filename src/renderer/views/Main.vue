<template>
	<div></div>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from 'vue';
import { useApp } from '../use/useApp';
import { useSideBar, Menus } from '../use/useSideBar';
import { useRouter } from 'vue-router';

export default defineComponent({
	name: 'home',
	components: {},
	setup() {
		let app = useApp();

		let router = useRouter();

		watchEffect(() => {
			let path = `/home/${menus.selected.value}`;
			router.push({ path: path });
		});

		return {};
	},
});
</script>

<style scoped>
</style>
