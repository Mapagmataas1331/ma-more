<script lang="ts">
	import Header from '$shared/components/Header.svelte';
	import { Toaster } from '$shared/components/ui/sonner/index.js';
	import Footer from '$shared/components/Footer.svelte';
	import '@/app.scss';

	let { children } = $props();
</script>

<Header
	links={{
		'https://ma.cyou/': { name: 'Home', nameRu: 'Главная' },
		'/': { name: 'more', nameRu: 'больше' }
	}}
/>

<Toaster />

{@render children?.()}

<Footer
	links={{
		'https://ma.cyou/': { name: 'Author', nameRu: 'Автор' },
		'https://github.com/mapagmataas1331/ma-more/': { name: 'Source code', nameRu: 'Исходный код' }
	}}
/>
