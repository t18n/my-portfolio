<style>
	@font-face {
		font-family: 'Fira Code', monospace;
		font-display: optional;
		src: url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
	}

	:global(:root) {
		/* Spacing */
		--spacing-base: 4px;

		/* Color */
		--color-brand: #f04875;
		--color-bg: #111111;
		--color-bg-light: #4b555e;
		--color-gray: #c9c3c6;
		--color-white: #ffffff;

		/* Border */
		--border-radius: 8px;

    /* Size */
    --content-width: 100%;
	}

  @media (min-width: 768px) {
    :global(:root) {
      --content-width: 560px;
		}
	}


  @media (min-width: 1280px) {
    :global(:root) {
      --content-width: 980px;
		}
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(html),
	:global(body) {
		transition: background-color 0.2s ease 0s;
		position: relative;
		width: 100%;
		overflow: auto;
		font-family: 'Fira Code', monospace;
		background-color: var(--color-bg);
	}

	:global(body) {
		color: var(--color-white);
		margin: 0;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		line-height: 1.75;
		place-items: center;
		overflow-x: hidden;
		min-height: 100vh;
	}

  @media (min-width: 768px) {
		:global(body) {
			padding: 0 100px;
		}
	}

	:global(main) {
		flex: 1;
		width: 100%;
	}

	:global(h1) {
		border: 0;
	}

	:global(::selection) {
		color: var(--color-white);
		background: var(--color-brand);
	}


	:global(a) {
		color: var(--color-white);
	}

	:global(a:hover) {
		color: var(--color-gray);
		text-decoration: underline;
	}

	:global(a:visited) {
		color: var(--color-white);
	}

	:global(.tooltip) {
		visibility: hidden;
	}
</style>
