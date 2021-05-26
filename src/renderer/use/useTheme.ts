/// useThem switch to theme by name
export function useTheme(name: string = 'default') {
	let element = document.getElementById('cc-theme');

	if (element) {
		document.removeChild(element);
	}

	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = `../theme/${name}/index.css`;
	link.id = 'cc-theme';
	document.getElementsByTagName('head')[0].appendChild(link);
}
