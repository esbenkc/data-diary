<script>
  import { createEventDispatcher } from "svelte";
  export let text = "Define <code>text</code>";
  export let start = false;

  const dispatch = createEventDispatcher();

  function toggle() {
    start = !start;

    dispatch("toggle", {
      habit: text,
      value: start,
      date: new Date(new Date(Date.now()).setHours(0, 0, 0, 0)).getTime(),
    });
  }
</script>

<div class="binary-wrapper">
  <h4>{@html text}</h4>
  {#if start}
    <p class="on" on:click={toggle}>✔</p>
  {:else}
    <p class="off" on:click={toggle}>❌</p>
  {/if}
</div>

<style>
  h4 {
    font-size: 1rem;
    margin: 0;
    padding: 0;
    font-weight: 400;
  }

  p {
    margin: 0;
    padding: 0;
    width: 3.5rem;
    height: 3.5rem;
    border: 2px solid #000;
    cursor: pointer;
  }

  .on {
    background-color: #00b300;
  }

  .off {
    background-color: #ff0000;
  }

  .binary-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    padding: 0.75rem 5% 0rem 5%;
    margin: 0 0;
  }
</style>
