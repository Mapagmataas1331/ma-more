<script lang="ts">
	import { Button } from '$shared/components/ui/button/index.js';
	import { language } from '$shared/stores/language';
</script>

<div
	class="mx-auto flex min-h-[calc(100dvh_-_3.5rem)] w-full flex-col items-center justify-center bg-gradient-to-br from-white to-sky-200 px-1 dark:from-sky-800 dark:to-black md:min-h-[calc(100dvh_-_4rem)]"
>
	<div class="m-2 rounded-lg border bg-background px-3 py-2">
		<h1 class="border-b pb-3 text-3xl font-semibold tracking-tight transition-colors">
			macyou more
		</h1>
		<p class="p-2 leading-7">
			{$language === 'ru'
				? 'Дополнительные функции сайтов автора Mapagmataas'
				: "Additional features of Mapagmataas' websites"}
		</p>
	</div>
	<div>
		<Button variant="outline" href="/og"
			>{$language === 'ru' ? 'Создать OG картинку' : 'Create OG image'}</Button
		>
	</div>
</div>
