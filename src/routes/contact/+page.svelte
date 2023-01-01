<script context="module" lang="ts">
	export const hydrate = true;
	export const router = true;
	export const prerender = true;
</script>

<script lang="ts">
	import Content from '$lib/components/Content.svelte';
	import Button from '$lib/components/Button.svelte';

	import { enhance } from '$app/forms';

	export let data;
	export let form;
</script>

<svelte:head>
	<title>Turbo Ninh — Services</title>
</svelte:head>

<Content>
	<h1>Contact me</h1>
	<form use:enhance method="POST" action="/contact">
		<input type="hidden" name="form-name" value="contact-me-form" />
		<label for="name">
			Name
			<input type="text" name="name" />

			{#if form?.status !== 500 && form?.errors.find((error) => error.field === 'name')}
				<p class="error">{form?.errors.find((error) => error.field === 'name').message}</p>
			{/if}
		</label>

		<label for="email">
			Email
			<input name="email" autocomplete="email" />
			{#if form?.status !== 500 && form?.errors.find((error) => error.field === 'email')}
				<p class="error">{form?.errors.find((error) => error.field === 'email').message}</p>
			{/if}
		</label>

		<label for="message">
			Message
			<textarea name="message" />
			{#if form?.status !== 500 && form?.errors.find((error) => error.field === 'message')}
				<p class="error">{form?.errors.find((error) => error.field === 'message').message}</p>
			{/if}
		</label>

		{#if form?.status === 200}
			<p class="success">
				Thank you for contacting me, I will get back to you asap. Have a beautiful day ❤️
			</p>
		{/if}

		{#if form?.status === 500}
			<div class="error">
				Oops, something is wrong. Seems like I'm not able to receive your message.
				<br />You can still reach me at my
				<a class="brand" href="https://www.linkedin.com/in/turboninh/" target="_bank">LinkedIn</a>
				profile.
				<p class="brand">Sorry for the inconvenience. Have a beautiful day ❤️</p>
			</div>
		{/if}

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
		padding: var(--spacing-base);
	}

	.error,
	.success,
	.brand {
		color: var(--color-error);
		font-size: 90%;
		margin-top: var(--spacing-base);
	}

	.success {
		color: var(--color-success);
	}

	.brand {
		color: var(--color-brand);
	}
</style>
