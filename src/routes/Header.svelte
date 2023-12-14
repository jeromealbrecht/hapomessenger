<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import avioned from '$lib/images/avioned.jpg';
</script>

<header>
	<div class="header-container">
		<div class="corner">
			<a href="https://kit.svelte.dev">
				<img src={logo} alt="SvelteKit" />
			</a>
		</div>

			<div class="logo-center">
				<img src={avioned} alt="Avioned" />
		</div>

		<div class="corner">
			<a href="https://github.com/sveltejs/kit">
				<img src={github} alt="GitHub" />
			</a>
		</div>

	
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
	}

	.header-container {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner img {
		width: 100%; /* Ajustez la largeur pour remplir le conteneur */
		height: 100%; /* Ajustez la hauteur pour remplir le conteneur */
		object-fit: contain;
	}

	.logo-center {
		padding-top: 2rem;
		justify-content: center;
    display: flex;
	}

	.logo-center img {
		width: 25%; /* Ajustez la largeur pour remplir le conteneur */
		object-fit: cont;
		border-radius: 50%;
	}
</style>
