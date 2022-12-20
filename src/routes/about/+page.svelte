<script lang="ts">
	import Content from '$lib/components/Content.svelte';
	import skills from '$lib/config/skills';
</script>

<svelte:head>
	<title>Turbo Ninh — About</title>
</svelte:head>

<script context="module" lang="ts">
  export const hydrate = true
  export const router = true
  export const prerender = true
</script>

<Content>
	<main>
		<h1>About Me</h1>
		<p>
			Hello there!
			<br />
			<br />
			Thanks for visiting my website.
			<br />
			<br />
			My name is Turbo. I am a full-stack Javascript developer based in the beautiful city of Copenhagen.
			As a programmer, I am constantly seeking out new challenges and love nothing more than diving into
			complex projects and architecting solutions that truly make a difference. In my free time, I am
			passionate about continuing to learn and stay up-to-date on the latest technologies, learning about
			privacy, security and decentralization. You can find me bragging about a new side-project from
			time to time, where I apply all these new knowledge to learn, level up my skill and hopefully eventually
			build and launch a useful product.
			<br />
			<br />
			Speaking of hobbies, I am an avid mind and body enthusiast and love nothing more than a good strength
			training or meditation session to clear my mind. And while I do try to go for a run every now and
			then, let's just say that it's not my favorite activity. In my downtime, I also enjoy reading various
			topics of book on my Kindle, cooking, experimenting with new coffee and cocktail recipes, and trying
			out new activities and exploring new places. Oh, and although I'm not exactly a pro at chess or
			fussball, I still love a good game every now and then.
		</p>
		<h2>Skills</h2>
		{#each Object.entries(skills) as [section, technologies]}
			<ul>
				<li>
					<h4>
						{section}:
					</h4>
					<div class="list">
						{#each technologies as technology}
							<div>
								{technology}
							</div>
						{/each}
					</div>
				</li>
			</ul>
		{/each}
	</main>
</Content>

<style>
	main {
		max-width: 100%;
		min-height: 500px;
		text-align: left;
		margin: 0 auto;
		box-sizing: border-box;
	}

	h1 {
		font-weight: 700;
		margin: 0 0 50px 0;
		font-size: 36px;
		text-align: start;
	}

	h2 {
		margin-top: 50px;
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	@media (min-width: 900px) {
		.list {
			flex-direction: row;
		}
		main > h1 {
			font-size: 48px;
		}
	}
</style>
