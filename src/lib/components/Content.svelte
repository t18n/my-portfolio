<div class="content">
	<slot />
</div>

<style>
	.content {
		padding: calc(var(--spacing-base) * 8) calc(var(--spacing-base) * 4);
		width: var(--content-width);
		margin: auto;
	}

	@media (min-width: 768px) {
		.content {
			padding: calc(var(--spacing-base) * 12);
		}
	}
</style>
