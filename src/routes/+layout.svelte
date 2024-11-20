<script lang="ts">
	import Header from '$shared/components/Header.svelte';
	import { Toaster } from '$shared/components/ui/sonner/index.js';
	import '@/app.scss';

	let { children } = $props();
</script>

<Header
	navLinks={{
		'https://ma.cyou/': { name: 'Home', nameRu: 'Главная' },
		'/': { name: 'more', nameRu: 'больше' }
	}}
/>

<Toaster />

{@render children?.()}
