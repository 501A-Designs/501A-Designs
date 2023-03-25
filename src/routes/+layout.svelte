<script lang="ts">
	import '../app.css';
	import Footer from '../lib/Footer.svelte';
	import { currentRoute,theme,language } from '../util/store';
  import { MetaTags } from 'svelte-meta-tags';

	let slug:string;
	currentRoute.subscribe(value => {
		slug = value;
	});
</script>

<svelte:head>
  <meta
		name="color-scheme"
		content={
			$theme == 'system' ?
			'light dark':$theme
		}
	/>
	<link
		rel="stylesheet"
		href={`/theme/${$theme}.css`}
	/>
</svelte:head>

<main>
	<slot />
</main>

<Footer>
	{#if slug !== "index"}
		<div>
			<a href="/">↩︎ {$language === 'japanese'?'メイン':'Main'}</a>
			{#if typeof slug === 'number'}
				<span>
					 / 
					<a href="/projects">
						{$language === 'japanese'?'創作物':'Projects'}
					</a>
					 / {$language === 'japanese'?'通し番号':'Index'} #{slug}
				</span>
				{:else}
				<span>
					 / 
					{#if slug === 'about'}
						{$language === 'japanese'?'自分について':'About Me'}
					{/if}
					{#if slug === 'projects'}
						{$language === 'japanese'?'創作物':'Projects'}
					{/if}
					{#if slug === 'memo'}
						{$language === 'japanese'?'メモ':'Memo'}
					{/if}
				</span>
			{/if}
		</div>
		{:else}
		<span>501A Designs</span>
	{/if}
</Footer>
