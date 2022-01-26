<script>
  import { where } from "firebase/firestore";

  import { User, Doc, Collection } from "sveltefire";
  import Binary from "./Binary.svelte";
  import TextInput from "./TextInput.svelte";

  export let type = "empty";
  export let user = new User();
</script>

<div class="block">
  {#if type == "lifestyle"}
    <Doc path={`diary/${user.uid}`} let:data={diary} let:ref={postRef} log>
      <!-- <h2>{diary.title}</h2>

      <p>
        Document created at <em>{new Date(post.createdAt).toLocaleString()}</em>
      </p> -->

      <span slot="loading">Loading data...</span>
      <span slot="fallback" />

      <!-- 4. 💬 Get all the comments in its subcollection -->

      <h3>CONTENT</h3>
      <Collection
        path={postRef.collection("habits")}
        query={(ref) =>
          ref.where("date", "==", Date.now().setHours(0, 0, 0, 0))}
        let:data={habits}
        let:ref={habitsRef}
        log
      >
        {#if !comments.length}
          No comments yet...
        {/if}

        {#each habits as habit}
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
              createdAt: Date.now().setHours(0, 0, 0, 0),
            })}
        >
          Add Comment
        </button>

        <span slot="loading">Loading comments...</span>

        <div class="block-title">
          <h2>Lifestyle</h2>
          <div class="block-title-right">
            <a href="">Today 📅</a>
          </div>
        </div>
        <Binary text={"Got up at 6:00"} start={false} {habitsRef} />
        <Binary text={"Exercise"} start={false} />
        <Binary text={"Caffeine"} start={false} />
        <Binary text={"Read book"} start={false} />
        <Binary
          text={"Github: 5 commits<span style='font-size:0.75rem;'>🔗</span>"}
          start={false}
        />
        <Binary text={"Slept well"} start={false} />
      </Collection>
    </Doc>
  {:else if type == "freestyle"}
    <div class="block-title">
      <h2>Freestyle</h2>
      <div class="block-title-right">
        <a href="" />
      </div>
    </div>
    <TextInput title={"What did you do yesterday?"} />
    <TextInput title={"Positive:"} />
    <TextInput title={"Constructive comments:"} />
  {/if}
</div>

<style>
  .block {
    width: 400px;
    background-color: #f3f3f3;
    border-radius: 1rem;
    border: 2px solid #000;
    margin: 0.75rem;
    font-family: "JetBrains Mono", monospace;
    padding-bottom: 1rem;
    transition: all 0.2s ease-out;
  }

  .block:hover {
    box-shadow: 0.5rem 0.5rem 0rem 0rem #000;
    transform: translate(-0.5rem, -0.5rem);
  }

  .block-title-right > a {
    text-decoration: none;
    color: #000;
    padding-bottom: 0.6rem;
  }

  .block-title-right > a:hover {
    font-weight: 700;
  }

  .block-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #000;
  }

  h2 {
    text-align: left;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
  }
</style>
