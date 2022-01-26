<script>
  export let userName = "User";
  export let auth;
</script>

<svelte:head>
  <link
    href="//db.onlinewebfonts.com/c/82ac464059468e8dacb3d4d3f5c81253?family=Footlight+MT+Light"
    rel="stylesheet"
    type="text/css"
  />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="wrapper">
  <h1 class="logo">
    <a href="../"> DATA DIARY </a>
  </h1>
  <div class="nav">
    <a href="../">Diary</a>
    <a href="../dashboard">Dashboard</a>
    <a href="../about">About</a>
  </div>
  <div class="user">
    <p>Hi, {userName} 👋</p>
    <button on:click={() => auth.signOut()}>Sign Out</button>
  </div>
</div>

<style>
  .wrapper {
    background-color: #fafafa;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100%-4px);
    border: 2px solid #000;
    margin: 0;
    font-family: "JetBrains Mono", monospace;
    font-size: 1rem;
    height: 5rem;
  }

  .nav > a {
    color: #000;
    padding: 0.1rem;
    margin: 1.8rem;
    text-decoration: none;
  }

  .nav > a:hover {
    border-bottom: 2px solid #000;
  }

  .user {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
    margin: 0;
    height: 100%;
  }

  .user > p {
    margin: 1rem;
    margin-right: 3rem;
  }

  .user > button {
    background-color: #000;
    color: #fff;
    height: 100%;
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 0 3rem;
    border-left: 2px solid #000;
  }

  .user > button:hover {
    background-color: #fbc902;
    color: #000;
  }

  h1 {
    padding: 0;
    margin: 0;
  }

  .logo {
    font-family: "Footlight MT Light", "Jetbrains Mono", "sans-serif";
    font-size: 3.5rem;
    font-weight: 400;
    letter-spacing: -0.25rem;
    color: #fff;
    text-decoration: none;
    margin-left: 1rem;
  }

  .logo > a {
    color: #000;
    text-decoration: none;
  }
</style>
