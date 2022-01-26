<script>
  export let text = "Define <code>text</code>";
  export let start = false;
  export let habitsRef = {};
  function toggle() {
    start = !start;
    habitsRef.set({
      habit: text,
      value: start,
      date: new Date(new Date(Date.now()).setHours(0, 0, 0, 0)).getTime(),
    });
  }
</script>

<div class="binary-wrapper">
  <h4>{@html text}</h4>
  {#if start}
    <p on:click={toggle}>on</p>
  {:else}
    <p on:click={toggle}>off</p>
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
