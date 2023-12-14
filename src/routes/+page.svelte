<script>
  import { onMount } from 'svelte';

  let messages = [];

  let user;

  onMount(() => {
    onAuthStateChanged(auth, (authUser) => {
      user = authUser;
    });
  });

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Vous pouvez accéder aux informations de l'utilisateur ici
        const user = result.user;
        console.log('Utilisateur connecté avec Google:', user);
      })
      .catch((error) => {
        console.error('Erreur lors de la connexion avec Google:', error);
      });
  }

  function signOutUser() {
    signOut(auth);
  }
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  {#if user}
    <!-- Utilisateur connecté, affichez les messages -->
    {#each messages as { avatar, pseudo, message }}
      <div class="wrapper">
        <!-- Avatar -->
        {#if avatar}
          <img src={avatar} alt="Avatar" class="avatar" />
        {:else}
          <img src="https://image.noelshack.com/fichiers/2023/50/4/1702591430-0cb27b4c-2b3f-467e-ba52-0ee8211cf67a.jpg" alt="Default Avatar" class="avatar" />
        {/if}
        
        <!-- Pseudo -->
        <div class="content">
          <span class="spancolor">{pseudo}</span>
          <hr class="hr-style">
          <!-- Message -->
          <span class="spancolor">{message}</span>
        </div>
      </div>
    {/each}
    <button on:click={signOutUser}>Se déconnecter</button>
  {:else}
    <!-- Utilisateur non connecté, affichez le bouton de connexion -->
    <button on:click={signInWithGoogle}>Se connecter avec Google</button>
  {/if}
</section>

<style>
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
