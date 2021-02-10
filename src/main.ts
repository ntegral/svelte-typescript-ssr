import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Typescript, Svelte & SSR'
	}
});

export default app;