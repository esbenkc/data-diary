<script>
  import { FirebaseApp, User, Doc, Collection } from "sveltefire";
  import Nav from "./components/Nav.svelte";
  import Block from "./components/Block.svelte";

  import firebase from "firebase/app";
  import "firebase/firestore";
  import "firebase/auth";
  import "firebase/performance";
  import "firebase/analytics";

  let firebaseConfig = {
    apiKey: "AIzaSyAro6lxkrF2z6Mg7Cn4G3tXmiwGAy4P2rE",
    authDomain: "data-diary-a5aa1.firebaseapp.com",
    projectId: "data-diary-a5aa1",
    storageBucket: "data-diary-a5aa1.appspot.com",
    messagingSenderId: "1049030690625",
    appId: "1:1049030690625:web:67eb7e32ed4bb1ce7983c0",
    measurementId: "G-FC67CCVL1M",
  };

  firebase.initializeApp(firebaseConfig);

  let email = "";
  let password = "";

  function signUp() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function signIn() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
</script>

<!-- 1. 🔥 Firebase App -->
<FirebaseApp {firebase}>
  <!-- 2. 😀 Get the current user -->
  <User let:user let:auth>
    <Nav userName={user.email} {auth} />
    <div class="main">
      <Block type={"lifestyle"} {user} />
      <Block type={"freestyle"} {user} />
    </div>

    <div class="login-background" slot="signed-out">
      <div class="login-block">
        Email: <input type="email" bind:value={email} />
        Password: <input type="password" bind:value={password} />
        <button class="register" on:click={signUp}> Register </button>
        <button class="login" on:click={signIn}> Login </button>
      </div>
    </div>

    <!-- 3. 📜 Get a Firestore document owned by a user -->
  </User>
</FirebaseApp>

<!-- Styles -->
<style>
  .main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: top;
  }

  .login-background {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  .login-block {
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #f3f3f3;
    border-radius: 2rem;
    border: 2px solid #000;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  }

  .login-block > input {
    margin-bottom: 1rem;
    margin-top: 0.1rem;
    padding: 0.5rem 0.75rem;
    border: 1px solid #000;
    border-radius: 0.5rem;
  }

  .login-block > button {
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid #000;
    border-radius: 0.5rem;
  }

  .register {
    background: #000;
    color: #fff;
  }

  .register:hover,
  .login:hover {
    background: #fbc902;
    color: #000;
    cursor: pointer;
  }

  :global(body),
  :global(html) {
    padding: 0;
    margin: 0;
    background-color: #fbc902;
    font-family: "JetBrains Mono", monospace;
  }

  main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    padding: 1em;
    max-width: 80em;
    margin: 0 auto;
  }

  h1,
  em {
    color: #ff3e00;
  }

  hr {
    height: 1px;
    border: none;
    background: rgb(195, 195, 195);
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
