<script lang="ts">
	import Burger from './Hamburger.svelte';
	import routes from '$lib/config/nav';
	import { afterNavigate } from '$app/navigation';

	afterNavigate(() => {
		opened = false;
	});

	let opened = false;
	export let segment = '';
</script>

<header class={opened ? 'nav open' : 'nav'}>
	<div class="controls">
		<a href="/">
			<img src="/logo.png" alt="logo" class="logo" />
		</a>
		<div class="burger">
			<Burger bind:open={opened} />
		</div>

		<div class="buttons desktop-buttons">
			{#each routes as route}
				<a class={`button ${segment === route.href ? 'selected' : ''}`} href={route.href}>
					{route.label}
				</a>
			{/each}
		</div>
	</div>

	{#if opened}
		<div class="buttons mobile-buttons">
			{#each routes as route}
				<a class={`button ${segment === route.href ? 'selected' : ''}`} href={route.href}>
					{route.label}
				</a>
			{/each}
		</div>
	{/if}
</header>

<style>
	.nav {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		max-width: var(--content-width);
		box-sizing: border-box;
		padding: calc(var(--spacing-base) * 5);
		height: 80px;
		overflow: hidden;
		transition: height 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
	}

	@media (min-width: 768px) {
		.nav {
			padding: 20px 0;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			max-width: 900px;
			margin: 0 auto;
		}

		.buttons {
			display: flex;
		}

		.nav .burger {
			display: none !important;
		}
		.navigation-items {
			display: none !important;
		}
	}

	@media (max-width: 767px) {
		.open {
			flex-direction: column !important;
			align-items: center !important;
			height: 100vh !important;
			transition: height 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
		}
	}

	.logo {
		cursor: pointer;
		height: 40px;
		width: 40px;
	}

	.selected {
		position: relative;
		color: white;
	}

	.button:hover::after {
		content: '';
		background: var(--color-brand);
		display: block;
		height: 3px;
		width: 100%;
		position: absolute;
		bottom: 0;
	}

	.button.selected:after {
		content: '';
		background: var(--color-brand);
		display: block;
		height: 3px;
		width: 100%;
		position: absolute;
		bottom: 0;
	}

	.controls {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		max-width: 900px;
		box-sizing: border-box;
		height: 50px;
		padding-top: calc(var(--spacing-base) * 2);
		padding-top: calc(var(--spacing-base) * 2);
	}

	.controls :a {
		height: 30px;
		color: white;
	}

	.buttons {
		justify-content: space-between;
		align-items: center;
		font-weight: 500;
	}

	.desktop-buttons {
		display: none;
	}

	.mobile-buttons {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: calc(var(--spacing-base) * 6);
	}

	.mobile-buttons .button {
		max-width: 100px;
		width: 100%;
		text-align: center;
		scale: 1.5;
	}

	@media (min-width: 768px) {
		.desktop-buttons {
			display: flex;
		}

		.mobile-buttons {
			display: none;
		}
	}

	.buttons .button {
		padding: 0;
		cursor: pointer;
		transition: color 0.2s ease-in-out;
		text-decoration: none;
		position: relative;
		margin: 10px;
		color: hsla(0, 0%, 100%, 0.4);
	}

	.button.selected {
		color: white;
	}

	.burger :global(button) {
		margin: 0;
	}
</style>
