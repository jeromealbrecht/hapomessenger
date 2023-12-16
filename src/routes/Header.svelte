<script>
	import { page } from '$app/stores';
	import avioned from '$lib/images/avioned.jpg';
</script>

<header>
	<div class="header-container">
			<div class="logo-center">
				<img src={avioned} alt="Avioned" />
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
		width: 15%; /* Ajustez la largeur pour remplir le conteneur */
		object-fit: cont;
		border-radius: 50%;
	}
</style>
