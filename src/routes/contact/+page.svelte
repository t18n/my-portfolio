<script lang="ts">
	import Content from '$lib/components/Content.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<svelte:head>
	<title>Turbo Ninh — Services</title>
</svelte:head>

<Content>
	<h1>Contact me</h1>
	<form name="contact" netlify>
		<label>
			Name
			<input type="text" name="name" />
		</label>

		<label>
			Email
			<input type="email" name="email" />
		</label>

		<label>
			Message
			<textarea name="message" />
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
