import { createSignal } from 'solid-js';
import { isServer } from 'solid-js/web';
import { getCookies } from 'undici';

const ThemeSwitcher = () => {
	const [theme, setTheme] = createSignal('dark');
	if (!isServer) {
		// Initial theme set
		const theme = localStorage.getItem('theme');
		if (theme == null) {
			localStorage.setItem('theme', 'dark');
			setTheme('dark');
		} else {
			setTheme(theme);
		}
	}
	const setBody = (theme: string, oldTheme: string) => {
		document.body.classList.remove(oldTheme);
		document.body.classList.add(theme);
	};
};
export default ThemeSwitcher;
