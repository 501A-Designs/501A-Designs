<svelte:head>
	<title>About</title>
	<meta name="Me" content="Things about me." />
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte';
	import { language } from '../../util/store';
	import { setThisRoute } from '../../util/setThisRoute';
  import AboutJpn from '../../content/japanese/about.md';
	import AboutEng from "../../content/english/about.md";
	import Contacts from "../../content/contacts.md";

	onMount(async () => setThisRoute('about'));
	
</script>

<div class="content">
	{#if $language === 'japanese'}
		<AboutJpn/>
		{:else}
		<AboutEng/>
	{/if}
	<Contacts/>
</div>

<style>
</style>
