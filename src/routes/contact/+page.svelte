<script context="module" lang="ts">
	export const hydrate = true;
	export const router = true;
	export const prerender = true;
</script>

<script lang="ts">
	import Content from '$lib/components/Content.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<svelte:head>
	<title>Turbo Ninh — Services</title>
</svelte:head>

<Content>
	<h1>Contact me</h1>
	<form name="contact-me-form" method="POST" data-netlify="true" netlify-honeypot="bot-field">
		<input type="hidden" name="form-name" value="contact-me-form" />
		<label for="name">
			Name
			<input type="text" name="name" required minlength="2" />
		</label>

		<label for="email">
			Email
			<input type="email" name="email" required autocomplete="email" minlength="5" />
		</label>

		<label for="message">
			Message
			<textarea name="message" required minlength="40" />
		</label>

		<Button type="submit">Send</Button>
	</form>
</Content>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	label {
		display: flex;
		flex-direction: column;
	}

	textarea {
		height: 80px;
		border-radius: var(--border-radius);
	}

	input {
		height: 40px;
		border-radius: var(--border-radius);
	}
</style>
