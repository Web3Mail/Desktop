import { inject, provide } from 'vue';
import { Database, verbose } from 'sqlite3';
import level from 'level-ts';

export interface App {
	// readonly settings: level;
	// readonly database: Database;
}

export const appSymbol = Symbol();
/// use mock app object
export function useApp(): App {
	const app = inject(appSymbol);
	if (!app) {
		throw new Error('provide app first');
	}
	return app as App;
}

class AppImpl implements App {
	// settings: level<any>;
	// database: Database;

	constructor() {
		// this.database = new Database(':memory:');
		// this.settings = new level('./settings');
	}
}

export function provideApp() {
	provide(appSymbol, new AppImpl());
}
