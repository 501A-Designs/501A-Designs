<script lang="ts">
  import { onMount } from 'svelte';
  import { language } from '../../util/store';
  import { setThisRoute } from '../../util/setThisRoute';
  import ProjectEng from '../../content/english/project.md';
  import ProjectJpn from '../../content/japanese/project.md';

  onMount(async () => setThisRoute('projects'));
</script>
  
<svelte:head>
  <title>Projects</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="content">
  <h1>{$language === 'japanese' ? '創作物':'Projects'}</h1>
  {#if $language === 'japanese'}
    <ProjectJpn/>
    {:else}
    <ProjectEng/>
  {/if}
</div>
  