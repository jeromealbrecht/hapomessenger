<script>
  // Importation des fonctions et objets nécessaires depuis Firebase
  import { onMount } from 'svelte';
  import { auth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from '../Firebase';
  import HapoMessaging from '$lib/components/DirectMessaging.svelte';

  // Déclaration d'une variable pour stocker l'utilisateur
  /**
	 * @type {import("@firebase/auth").User | null}
	 */
  let user;

  // Utilisation du hook onMount pour exécuter du code lors du montage du composant
  onMount(() => {
    // Abonnement aux changements d'état de l'authentification
    onAuthStateChanged(auth, (/** @type {import("@firebase/auth").User | null} */ authUser) => {
      user = authUser;
    });
  });

  // Fonction pour se connecter avec Google
  async function signInWithGoogle() {
    // Création d'une instance du fournisseur Google
    const provider = new GoogleAuthProvider();

    // Utilisation de signInWithPopup pour se connecter avec Google
    return signInWithPopup(auth, provider)
      .then((/** @type {{ user: import("@firebase/auth").User | null; }} */ result) => {
        user = result.user;
        console.log('Utilisateur connecté avec Google!');
      })
      .catch((/** @type {any} */ error) => {
        console.error('Erreur lors de la connexion avec Google:', error);
      });
  }

  // Fonction pour gérer la déconnexion
  function handleSignOut() {
    // Utilisation de la fonction signOut pour déconnecter l'utilisateur
    signOut(auth);
  }

  // Déclaration d'un tableau pour stocker les messages
  /**
	 * @type {any[]}
	 */
  let messages = [];
</script>

<style>
  /* Styles CSS pour le composant */
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .wrapper {
    display: flex;
    width: 80%;
    background-color: #2e3238;
    padding: 2%;
    margin-top: 1rem;
    border-radius: 1rem;
  }

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  .content {
    flex-grow: 1;
  }

  .hr-style {
    width: 100%;
    border: 0;
    height: 0.7px;
    background: #fff;
    margin: 10px 0;
  }

  .spancolor {
    width: 100%;
    color: #fff;
  }

</style>

<!-- Section principale du composant -->
<section>
  {#if user}
  <HapoMessaging />
    {#each messages as { avatar, pseudo, message }}
      <div class="wrapper">
        {#if avatar}
          <img src={avatar} alt="Avatar" class="avatar" />
        {:else}
          <img src="https://image.noelshack.com/fichiers/2023/50/4/1702591430-0cb27b4c-2b3f-467e-ba52-0ee8211cf67a.jpg" alt="Default Avatar" class="avatar" />
        {/if}
        <div class="content">
          <span class="spancolor">{pseudo}</span>
          <hr class="hr-style">
          <span class="spancolor">{message}</span>
        </div>
      </div>
    {/each}
    <button on:click={handleSignOut}>Se déconnecter</button>
  {:else}
    <button on:click={signInWithGoogle}>Se connecter avec Google</button>
  {/if}
</section>
