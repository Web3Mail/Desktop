<template>
	<router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { provideApp } from './use/useApp';
import { useTheme } from './use/useTheme';

export default defineComponent({
	name: 'app',
	setup() {
		/// use app data
		provideApp();

		useTheme();

		const router = useRouter();
		router.push('/');
	},
});
</script>
