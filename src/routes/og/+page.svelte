<script lang="ts">
	import * as Tabs from '$shared/components/ui/tabs/index.js';
	import * as Card from '$shared/components/ui/card/index.js';
	import { Input } from '$shared/components/ui/input/index.js';
	import { Textarea } from '$shared/components/ui/textarea/index.js';
	import { buttonVariants } from '$shared/components/ui/button/index.js';
	import { Label } from '$shared/components/ui/label/index.js';
	import * as Tooltip from '$shared/components/ui/tooltip/index.js';
	import { toast } from 'svelte-sonner';
	import { language } from '$shared/stores/language';

	const url = 'https://api.ma.cyou/og/';
	const params: Record<string, string> = { c: 'icon', y: 'title', o: 'website', u: 'description' };

	let icon = $state('https://ma.cyou/favicon.svg');
	let title = $state('macyou');
	let website = $state('https://ma.cyou/');
	let description = $state(
		'This is my personal resume website, showcasing my skills, experience, and projects. It serves as a digital portfolio, providing a platform for others to learn more about my work as a developer and the journey I’ve taken. The website highlights various aspects of my career, technical expertise, and creative endeavors.'
	);

	// Function to encode UTF-8 strings to Base64
	function encodeUTF8toBase64(input: string): string {
		const utf8Bytes = new TextEncoder().encode(input.replace(/о/g, 'o'));
		const base64String = btoa(String.fromCharCode(...utf8Bytes));
		return base64String;
	}

	// Function to decode Base64 strings back to UTF-8
	function decodeBase64toUTF8(input: string): string {
		const binaryString = atob(input);
		const utf8Bytes = Uint8Array.from(binaryString, (char) => char.charCodeAt(0));
		return new TextDecoder().decode(utf8Bytes);
	}

	let resultUrl = $derived(
		icon || title || website || description
			? `${url}?${icon ? 'c=' + encodeUTF8toBase64(icon) + '&' : ''}${title ? 'y=' + encodeUTF8toBase64(title) + '&' : ''}${website ? 'o=' + encodeUTF8toBase64(website) + '&' : ''}${description ? 'u=' + encodeUTF8toBase64(description) : ''}`
			: url
	);

	let imageResultUrl = $state(
		'https://api.ma.cyou/og/?c=aHR0cHM6Ly9tYS5jeW91L2Zhdmljb24uc3Zn&y=bWFjeW91&o=aHR0cHM6Ly9tYS5jeW91Lw==&u=VGhpcyBpcyBteSBwZXJzb25hbCByZXN1bWUgd2Vic2l0ZSwgc2hvd2Nhc2luZyBteSBza2lsbHMsIGV4cGVyaWVuY2UsIGFuZCBwcm9qZWN0cy4gSXQgc2VydmVzIGFzIGEgZGlnaXRhbCBwb3J0Zm9saW8sIHByb3ZpZGluZyBhIHBsYXRmb3JtIGZvciBvdGhlcnMgdG8gbGVhcm4gbW9yZSBhYm91dCBteSB3b3JrIGFzIGEgZGV2ZWxvcGVyIGFuZCB0aGUgam91cm5leSBJ4oCZdmUgdGFrZW4uIFRoZSB3ZWJzaXRlIGhpZ2hsaWdodHMgdmFyaW91cyBhc3BlY3RzIG9mIG15IGNhcmVlciwgdGVjaG5pY2FsIGV4cGVydGlzZSwgYW5kIGNyZWF0aXZlIGVuZGVhdm9ycy4='
	);

	setInterval(() => {
		imageResultUrl = resultUrl;
	}, 2500);

	// svelte-ignore state_referenced_locally
	let encodedUrl = $state(resultUrl);

	let decodedResult = $state(params);
	$effect(() => {
		try {
			const searchParams = new URL(encodedUrl).searchParams;
			const result: Record<string, string> = {};
			Object.entries(params).forEach(([key]) => {
				const value = searchParams.get(key);
				result[key] = value ? decodeBase64toUTF8(value) : '';
			});
			decodedResult = result;
		} catch (e) {
			alert(e);
		}
	});
</script>

<div
	class="mx-auto flex min-h-[calc(100dvh_-_3.5rem)] w-full flex-col items-center justify-center bg-gradient-to-br from-white to-sky-200 px-1 dark:from-sky-800 dark:to-black md:min-h-[calc(100dvh_-_4rem)]"
>
	<Tabs.Root value="create" class="w-[400px]">
		<Tabs.List class="grid w-full grid-cols-2">
			<Tabs.Trigger value="create">{$language === 'ru' ? 'Создать' : 'Create'}</Tabs.Trigger>
			<Tabs.Trigger value="decode">{$language === 'ru' ? 'Декодировать' : 'Decode'}</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="create">
			<Card.Root>
				<Card.Header>
					<Card.Title>{$language === 'ru' ? 'Создать ссылку' : 'Create link'}</Card.Title>
					<Card.Description>
						{$language === 'ru' ? 'Создать ссылку на OG картинку по параметрам' : 'Create link'}
					</Card.Description>
				</Card.Header>
				<Card.Content class="space-y-2">
					<Input
						type="url"
						id="icon"
						placeholder={$language === 'ru' ? 'Ссылка на иконку' : 'Icon link'}
						bind:value={icon}
					/>
					<Input
						type="text"
						id="title"
						placeholder={$language === 'ru' ? 'Заголовок' : 'Icon link'}
						bind:value={title}
					/>
					<Input
						type="url"
						id="website"
						placeholder={$language === 'ru' ? 'Ссылка на сайт' : 'Icon link'}
						bind:value={website}
					/>
					<Textarea
						id="description"
						placeholder={$language === 'ru' ? 'Описание' : 'Icon link'}
						bind:value={description}
					/>
					<img
						class="rounded-md border border-input bg-background"
						src={imageResultUrl}
						alt="og result"
					/>
					<Tooltip.Provider>
						<Tooltip.Root>
							<Tooltip.Trigger
								class="{buttonVariants({
									variant: 'outline'
								})} h-auto whitespace-pre-wrap break-all"
								onclick={() => {
									navigator.clipboard.writeText(resultUrl);
									toast.success(
										$language === 'ru' ? 'Скопировано в буфер обмена' : 'Copied to clipboard'
									);
								}}
							>
								{resultUrl}
							</Tooltip.Trigger>
							<Tooltip.Content>
								<p>{$language === 'ru' ? 'Скопировать ссылку' : 'Copy link'}</p>
							</Tooltip.Content>
						</Tooltip.Root>
					</Tooltip.Provider>
				</Card.Content>
			</Card.Root>
		</Tabs.Content>
		<Tabs.Content value="decode">
			<Card.Root>
				<Card.Header>
					<Card.Title>{$language === 'ru' ? 'Декодировать cсылку' : 'Decode link'}</Card.Title>
					<Card.Description>
						{$language === 'ru'
							? 'Декодировать уже имеющуюся cсылку'
							: 'Decode already existing link'}
					</Card.Description>
				</Card.Header>
				<Card.Content class="space-y-2">
					<Textarea
						id="encodedUrl"
						placeholder={$language === 'ru' ? 'Закодированная ссылка' : 'Encoded link'}
						bind:value={encodedUrl}
					/>
					<div class="mt-6 flex flex-col space-y-2">
						{#each Object.entries(decodedResult) as [param, value]}
							<Label>{params[param]}</Label>
							<Tooltip.Provider>
								<Tooltip.Root>
									<Tooltip.Trigger
										class="{buttonVariants({
											variant: 'outline'
										})} h-auto whitespace-pre-wrap break-all"
										onclick={() => {
											navigator.clipboard.writeText(value);
											toast.success(
												$language === 'ru' ? 'Скопировано в буфер обмена' : 'Copied to clipboard'
											);
										}}
									>
										{value}
									</Tooltip.Trigger>
									<Tooltip.Content>
										<p>
											{$language === 'ru'
												? 'Скопировать ' + params[param]
												: 'Copy ' + params[param]}
										</p>
									</Tooltip.Content>
								</Tooltip.Root>
							</Tooltip.Provider>
						{/each}
					</div>
				</Card.Content>
			</Card.Root>
		</Tabs.Content>
	</Tabs.Root>
</div>
