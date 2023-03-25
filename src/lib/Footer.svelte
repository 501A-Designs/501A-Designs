<script>
	import { theme, language } from '../util/store';
</script>

<footer>
  <slot />
	<div>
		<select bind:value="{$theme}">
			<option value="system">System</option>
			<option value="light">Light</option>
			<option value="dark">Dark</option>
		</select>
		<select bind:value="{$language}">
			<option value="english">English</option>
			<option value="japanese">日本語</option>
		</select>
	</div>
</footer>

<style>
	footer{
		max-height: 55px;
		margin: 0;
		transition: 0.5s;
		user-select: none;
    white-space: nowrap;

    border:none;
		border-top: 1px solid transparent;
		border-image: linear-gradient(90deg, var(--backgroundColor) 20%, var(--accentColor1) 50%, var(--backgroundColor) 80%);
		border-image-slice: 1;
		background: linear-gradient(90deg,var(--backgroundColor) 25%,var(--accentColor0),var(--backgroundColor) 75%);
	}
	footer div{
		display: flex;
		align-items: center;
		gap: 0.5em;
	}
</style>
