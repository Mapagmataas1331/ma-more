<script lang="ts">
	import { Button } from '$shared/components/ui/button/index.js';
	import { language } from '$shared/stores/language';

	const features = {
		'/og/': {
			title: 'OG image generator',
			description: 'Create OG image from parameters',
			titleRu: 'Генератор OG картинок',
			descriptionRu: 'Создать OG картинку по параметрам'
		}
	};
</script>

<div
	class="mx-auto flex min-h-[calc(100dvh_-_3.5rem)] w-full flex-col items-center justify-center bg-gradient-to-br from-white to-sky-200 px-1 dark:from-sky-800 dark:to-black md:min-h-[calc(100dvh_-_4rem)]"
>
	<div class="m-2 max-w-[640px] rounded-lg border bg-background px-4 py-2">
		<h1 class="border-b pb-3 text-3xl font-semibold tracking-tight transition-colors">
			macyou more
		</h1>
		<p class="p-2 leading-7">
			{$language === 'ru'
				? 'Дополнительные функции сайтов автора Mapagmataas'
				: "Additional features of Mapagmataas' websites"}
		</p>
		{#each Object.entries(features) as [link, { title, description, titleRu, descriptionRu }]}
			<div class="m-2 max-w-[640px] rounded-lg border bg-background px-4 py-2">
				<h2 class="border-b pb-3 text-2xl font-semibold tracking-tight transition-colors">
					{$language === 'ru' ? titleRu : title}
				</h2>
				<p class="p-2 leading-7">
					{$language === 'ru' ? descriptionRu : description}
				</p>
				<Button class="m-2 w-[calc(100%-14px)]" href={link}
					>{$language === 'ru' ? 'Перейти' : 'Go'}</Button
				>
			</div>
		{/each}
	</div>
</div>
