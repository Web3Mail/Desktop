const { join } = require('path');
const vue = require('@vitejs/plugin-vue');
const { chrome } = require('./electron-dep-versions');
const copy = require('rollup-plugin-copy-assets-to');
/**
 * @type {import('vite').UserConfig}
 * @see https://vitejs.dev/config/
 */
module.exports = {
	root: join(process.cwd(), './src/renderer'),
	resolve: {
		alias: {
			'/@/': join(process.cwd(), './src/renderer') + '/',
		},
	},
	plugins: [vue()],
	base: '',
	build: {
		target: `chrome${chrome}`,
		polyfillDynamicImport: false,
		outDir: join(process.cwd(), 'dist/source/renderer'),
		assetsDir: '.',
		rollupOptions: {
			external: require('./external-packages').default,
			plugins: [
				// copy({
				// 	assets: [join(process.cwd(), './src/renderer/assets')],
				// 	outputDir: join(process.cwd(), 'dist/source/'),
				// }),
				copy({
					assets: [join(process.cwd(), './src/renderer/theme')],
					outputDir: join(process.cwd(), 'dist/source/'),
				}),
			],
		},
		emptyOutDir: true,
	},
};
