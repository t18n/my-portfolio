<script context="module" lang="ts">
  export const hydrate = true
  export const router = true
  export const prerender = true
</script>

<script lang="ts">
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import Content from '$lib/components/Content.svelte';
</script>

<svelte:head>
	<title>Turbo Ninh</title>
</svelte:head>

<Content>
	<div class="main">
		<h1>Hi!👋 <br /></h1>
		<h2>I'm Turbo, a random full-stack Javascript developer based in Copenhagen</h2>
		<div class="icons">
			<a
				href="https://github.com/turboninh"
				aria-label="GitHub"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div class="icon">
					<FaGithub />
				</div>
			</a>
			<a
				href="https://www.linkedin.com/in/turboninh/"
				aria-label="Linkedin"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div class="icon">
					<FaLinkedin />
				</div>
			</a>
		</div>
	</div>
</Content>

<style>
	.main {
		text-align: center;
		padding: 0;
		margin: 0 auto;
		text-align: center;
		display: flex;
		flex-direction: column;
		height: calc(100vh - 80px - 88px);
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-weight: 700;
	}

	.main > h1 {
		margin: 50px 10px 0;
		font-size: 36px;
	}

	.icons {
		display: flex !important;
		justify-content: center !important;
		align-items: center;
		gap: 20px;
		cursor: pointer;
		font-size: 30px;
		display: flex;
		justify-content: space-between;
		max-width: 200px;
		margin: 50px auto 0;
	}

	.icon {
		cursor: pointer;
		transition: color 0.2s ease-in-out;
		width: 40px;
	}
	.icon:hover {
		color: var(--color-brand);
	}

	@media (min-width: 900px) {
		.main > h1 {
			font-size: 48px;
		}
	}

	@media (min-width: 600px) {
		.main {
			max-width: none;
		}
	}
</style>
