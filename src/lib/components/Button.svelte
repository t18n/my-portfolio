<script lang="ts">
	export let type = 'button';
	export let onClick = () => {};
</script>

<button class="button" {type} on:click={onClick}>
	<slot />
</button>

<style>
	.button {
		cursor: pointer;
		height: 40px;
		width: 200px;
		border-radius: var(--border-radius);
		background-color: var(--color-brand);
		color: var(--color-white);
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 600;
	}

	.button:hover {
		animation: gradient 2s ease infinite;
	}
</style>
