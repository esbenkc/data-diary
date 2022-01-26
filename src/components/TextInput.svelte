<script>
  export let title = "Define <code>&lt;title&gt;</code>";
</script>

<div class="wrapper">
  <h4>
    {@html title}
  </h4>
  <textarea rows="5" id="title" placeholder="Write here" />
</div>

<style>
  h4 {
    font-size: 0.8rem;
    margin: 0;
    margin-left: 0.1rem;
    padding: 0;
    font-weight: 400;
    text-align: left;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    width: 90%;
    padding: 0.75rem 5% 0rem 5%;
    margin: 0 0;
  }

  textarea {
    resize: none;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #000;
    background-color: #f3f3f3;
    border-radius: 0.5rem;
    font-size: 0.8rem;
  }

  textarea::-webkit-scrollbar {
    width: 0.25rem;
  }

  textarea::-webkit-scrollbar-track {
    background: #f3f3f3;
  }

  textarea::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 5rem;
  }
</style>
