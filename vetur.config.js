/** @type {import('vls').VeturConfig} */
module.exports = {
	settings: {
		'vetur.useWorkspaceDependencies': true,
		'vetur.experimental.templateInterpolationService': true,
	},
	projects: [
		{
			package: '../../package.json',
			root: './src/renderer',
			tsconfig: './tsconfig.json',
		},
		{
			root: './src/main',
			tsconfig: './tsconfig.json',
		},
		{
			root: './src/preload',
			tsconfig: './tsconfig.json',
		},
	],
};
