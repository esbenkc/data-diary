<script>
  import { FirebaseApp, User, Doc, Collection } from "sveltefire";

  import firebase from "firebase/app";
  import "firebase/firestore";
  import "firebase/auth";
  import "firebase/performance";
  import "firebase/analytics";
  import { getRedirectResult, signInWithCredential } from "firebase/auth";

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

<main>
  {#if !firebaseConfig.projectId}
    <strong>Step 0</strong>
    Create a
    <a href="https://firebase.google.com/">Firebase Project</a>
    and paste your web config into
    <code>App.svelte</code>
    .
  {/if}

  <!-- 1. 🔥 Firebase App -->
  <FirebaseApp {firebase}>
    <h1>💪🔥 Mode Activated</h1>

    <p>
      <strong>Tip:</strong>
      Open the browser console for development logging.
    </p>

    <!-- 2. 😀 Get the current user -->
    <User let:user let:auth>
      Howdy 😀! User
      <em>{user.email}</em>

      <button on:click={() => auth.signOut()}>Sign Out</button>

      <div slot="signed-out">
        Email: <input type="email" bind:value={email} /> <br />
        Password: <input type="password" bind:value={password} /> <br />
        <button on:click={signUp}> Sign up </button>
        <button on:click={signIn}> Login </button>
      </div>

      <hr />

      <!-- 3. 📜 Get a Firestore document owned by a user -->
      <Doc path={`posts/${user.uid}`} let:data={post} let:ref={postRef} log>
        <h2>{post.title}</h2>

        <p>
          Document created at <em
            >{new Date(post.createdAt).toLocaleString()}</em
          >
        </p>

        <span slot="loading">Loading post...</span>
        <span slot="fallback">
          <button
            on:click={() =>
              postRef.set({
                title: "📜 I like Svelte",
                createdAt: Date.now(),
              })}
          >
            Create Document
          </button>
        </span>

        <!-- 4. 💬 Get all the comments in its subcollection -->

        <h3>Comments</h3>
        <Collection
          path={postRef.collection("comments")}
          query={(ref) => ref.orderBy("createdAt")}
          let:data={comments}
          let:ref={commentsRef}
          log
        >
          {#if !comments.length}
            No comments yet...
          {/if}

          {#each comments as comment}
            <p>
              <!-- ID: <em>{comment.ref.id}</em> -->
            </p>
            <p>
              {comment.text}
              <button on:click={() => comment.ref.delete()}>Delete</button>
            </p>
          {/each}

          <button
            on:click={() =>
              commentsRef.add({
                text: "💬 Me too!",
                createdAt: Date.now(),
              })}
          >
            Add Comment
          </button>

          <span slot="loading">Loading comments...</span>
        </Collection>
      </Doc>
    </User>
  </FirebaseApp>
</main>

<!-- Styles -->
<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
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
