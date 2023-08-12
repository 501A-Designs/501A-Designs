<script lang="ts">
  import { fade } from 'svelte/transition';
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

<MetaTags
  title="501A"
	description="Personal portfolio site."
  openGraph={{
    images: [
      {
        url: '/images/501a-og-image.png',
        width: 800,
        height: 600,
        alt: 'Og Image Alt'
      },
    ],
    site_name: '501A.netlify.app'
  }}
  twitter={{
    handle: '@501A_Designs',
    cardType: 'summary_large_image',
    title: '501A Portfolio Site',
    description: 'Welcome to my space in the internet.',
    image: '/images/501a-og-image.png',
    imageAlt: 'Twitter image alt'
  }}
/>

<main>
	<slot />
</main>

<Footer>
	{#if slug !== "index"}
		<div>
			<a href="/">{$language === 'japanese'?'メイン':'Main'}</a>
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
					{#if slug === 'card'}
						{$language === 'japanese'?'名刺':'Card'}
					{/if}
				</span>
			{/if}
		</div>
		{:else}
		<span style="color: var(--textColor0)">501A Designs</span>
	{/if}
</Footer>
