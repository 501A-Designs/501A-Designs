<script lang="ts">
  import { onMount } from 'svelte';
  import { language } from '../../util/store';
  import { setThisRoute } from '../../util/setThisRoute';
  import MemoEng from '../../content/english/memo.md';
  import MemoJpn from '../../content/japanese/memo.md';

  onMount(async () => setThisRoute('memo'));
</script>
  
<svelte:head>
  <title>Memo</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="content">
  <!-- <h1>{$language === 'japanese' ? '創作物':'Projects'}</h1> -->
  {#if $language === 'japanese'}
    <MemoJpn/>
    {:else}
    <MemoEng/>
  {/if}
</div>