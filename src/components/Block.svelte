<script>
  import { orderBy } from "firebase/firestore";
  import { where } from "firebase/firestore";
  import { fix_and_destroy_block, get_store_value } from "svelte/internal";

  import { User, Doc, Collection } from "sveltefire";
  import Binary from "./Binary.svelte";
  import TextInput from "./TextInput.svelte";

  export let type = "empty";
  export let user = new User();

  let habitsList = [
    "Wake at 6:00",
    "Drink 1.5L water",
    "Sleep at 23:00",
    "Exercise",
    "Read book",
    "5x Github commits",
  ];
</script>

<div class="block">
  {#if type == "lifestyle"}
    <Doc path={`diary/${user.uid}`} let:data={diary} let:ref={postRef} log>
      <!-- <h2>{diary.title}</h2>

      <p>
        Document created at <em>{new Date(post.createdAt).toLocaleString()}</em>
      </p> -->

      <span slot="loading">Loading data...</span>
      <span slot="fallback">
        <!-- 4. 💬 Get all the comments in its subcollection -->

        <Collection
          path={postRef.collection("habits")}
          query={(ref) =>
            ref.where(
              "date",
              "==",
              new Date(new Date(Date.now()).setHours(0, 0, 0, 0)).getTime()
            )}
          let:data={habits}
          let:ref={habitsRef}
          log
        >
          <span slot="loading">Loading data...</span>
          <div class="block-title">
            <h2>Lifestyle</h2>
            <div class="block-title-right">
              <a href=".">Today 📅</a>
            </div>
          </div>

          {#each habitsList as habitText}
            <Binary
              text={habitText}
              start={habits.find((o) => o.habit == habitText)
                ? habits.find((o) => o.habit == habitText).value
                : false}
              on:toggle={(event) => {
                habitsRef.doc(event.detail.habit + event.detail.date).set({
                  habit: event.detail.habit,
                  value: event.detail.value,
                  date: event.detail.date,
                });
              }}
            />
          {/each}
        </Collection>
      </span>
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
