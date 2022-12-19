<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { page } from '$app/stores';
	import GlobalStyle from '$lib/components/GlobalStyle.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header segment={$page.url.pathname} />

<main>
	<slot />
</main>

<Footer />

<GlobalStyle />
