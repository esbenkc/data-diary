<script>
  import Header from "$lib/header/Header.svelte";
  import "../app.css";

  import { FirebaseApp, User, Doc, Collection } from "sveltefire";
  import { firebaseConfig } from "../env";
  // Import the Firebase Services you want bundled and call initializeApp
  import firebase from "firebase/app";
  import "firebase/firestore";
  import "firebase/auth";
  import "firebase/performance";
  import "firebase/analytics";

  firebase.initializeApp(firebaseConfig);
</script>

<FirebaseApp {firebase}>
  <!-- 1. 🔥 Have some fun in here -->
</FirebaseApp>

<Header />

<main>
  <slot />
</main>

<footer>
  <p>Visit your mama for now.</p>
</footer>

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 40px 0;
    }
  }
</style>
